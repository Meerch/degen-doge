import {useAccount, useContractRead, useContractWrite, usePrepareContractWrite, useWaitForTransaction} from "wagmi";
import {addressDoges, generateContractDCSetting, generateContractDogesSetting} from "../../../blockchain/utils";
import {formatEther, toWei} from "../../../utils";
import web3 from "web3";
import {useEffect, useState} from "react";
import {changeCurrentPopup} from "../../../redux/actions/popup";
import {useDispatch} from "react-redux";

export const useMint = (amount: number) => {
    const {address} = useAccount()
    const dispatch = useDispatch()
    const [isError, setIsError] = useState(false)

    const {data: availableTokensToMint} = useContractRead(generateContractDogesSetting('remainToMint', {
        args: address,
        select: data => toWei(formatEther(data))
    }))

    const {data: balance} = useContractRead(generateContractDCSetting('balanceOf', {
        args: address,
        select: (data) => +formatEther(data)
    }))

    const {data: isApprove} = useContractRead(generateContractDCSetting('allowance', {
        args: [address, addressDoges],
        select: data => formatEther(data)
    }))

    const {data: priceDC} = useContractRead(generateContractDogesSetting('getPriceInDC', {
        select: data => data && formatEther(data)
    }))

    const {config: configApprove} = usePrepareContractWrite(generateContractDCSetting('approve', {
        args:
            availableTokensToMint && priceDC &&
            [addressDoges, web3.utils.toWei(String(+availableTokensToMint * +priceDC))],
    }))
    const {write: writeApprove, data: dataApprove} = useContractWrite(configApprove)
    const {
        isLoading: isLoadingApprove,
        isSuccess: isSuccessApprove = false
    } = useWaitForTransaction({
        hash: dataApprove?.hash,
        onError: () => setIsError(true)
    })

    const {config: configMint} = usePrepareContractWrite(generateContractDogesSetting('mintNft', {
        args: [amount, true],
        enabled: (+isApprove >= +priceDC * +availableTokensToMint) || dataApprove
    }))
    const {write: writeMint, data: dataSuccess} = useContractWrite(configMint)
    const {isLoading: isLoadingMint, isSuccess: isSuccessMint = false} = useWaitForTransaction({
        hash: dataSuccess?.hash,
        onError: () => setIsError(true)
    })

    useEffect(() => {
        if (isSuccessMint) {
            dispatch(changeCurrentPopup('success'))
        }
    }, [isSuccessMint])

    const handlerClickActionButton = async () => {
        if (isLoadingMint || isLoadingApprove) {
            return
        }

        if (isError) {
            setIsError(false)
        }

        if (isSuccessApprove || +isApprove >= +priceDC * +availableTokensToMint) {
            writeMint && writeMint()
        } else {
            writeApprove && writeApprove()
        }
    }

    const checkIsDisableButton = () => {
        if (isLoadingMint || isLoadingApprove) {
            return false
        }

        return (!isError) &&
            (isSuccessApprove
                || (+isApprove >= +priceDC * +availableTokensToMint && amount === 0)
                || amount > +availableTokensToMint
                || amount * +priceDC > +balance)
    }

    return {
        isViewActiveButton: !isLoadingMint && !isLoadingApprove && !isError,
        availableTokensToMint,
        handlerClickActionButton,
        isLoading: isLoadingMint || isLoadingApprove,
        isError: isError,
        checkIsDisableButton,
        isApprove: isSuccessApprove || +isApprove >= +priceDC * +availableTokensToMint
    }
}