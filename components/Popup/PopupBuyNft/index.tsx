import React, {useEffect, useState} from 'react'
import styles from './PopupBuyNft.module.scss'
import Button from "../../UI/Button"
import PopupLayout from "../PopupLayout"
import classNames from "classnames"
import {ErrorButton} from "./StatesButton/ErrorButton"
import LoadingButton from "./StatesButton/LoadingButton"
import {AptosClient} from "aptos";
import {useWallet} from '@manahippo/aptos-wallet-adapter';
import cmHelper from "../../../helpers/candyMachineHelper"
import {
    candyMachineAddress,
    collectionName,
    collectionCoverUrl,
    NODE_URL,
    CONTRACT_ADDRESS,
    COLLECTION_SIZE
} from "../../../helpers/candyMachineInfo"
import {useDispatch} from "react-redux";
import {changeMintedImages} from "../../../redux/actions/mint";
import {changeCurrentPopup} from "../../../redux/actions/popup";

const aptosClient = new AptosClient(NODE_URL);
const autoCmRefresh = 10000;

interface CandyMachineData {
    numUploadedTokens?: any
    maxMintsPerWallet?: any
    numMintedTokens?: any
    tokenDataHandle?: any
    cmResourceAccount?: any
    presaleMintTime?: any
    publicMintTime?: any
    isPublic?: any
}

interface CandyMachine {
    data: CandyMachineData
    fetch: any
}

interface MintInfo {
    numToMint?: number,
    minting?: boolean,
    success?: boolean,
    mintedNfts?: any[]
}

const PopupBuyNft = () => {
    const wallet = useWallet();
    const dispatch = useDispatch()
    const [isFetchignCmData, setIsFetchignCmData] = useState(false)
    const [candyMachineData, setCandyMachineData] = useState<CandyMachine>({data: {}, fetch: fetchCandyMachineData})
    // const [timeLeftToMint, setTimeLeftToMint] = useState<any>({presale: "", public: "", timeout: null})
    const [mintInfo, setMintInfo] = useState<MintInfo>({numToMint: 0, minting: false, success: false, mintedNfts: []})
    const [canMint, setCanMint] = useState(false)
    const [error, setError] = useState(null)
    const [maxAmount, setMaxAmount] = useState(0)
    // const max = candyMachineData.data.maxMintsPerWallet === undefined
    //     ? 10
    //     : Math.min(candyMachineData.data.maxMintsPerWallet, candyMachineData.data.numUploadedTokens - candyMachineData.data.numMintedTokens)

    useEffect(() => {
        const {data: {maxMintsPerWallet, numUploadedTokens, numMintedTokens}} = candyMachineData
        console.log('_____ CANDY MACHINE ______')
        console.log('maxMintsPerWallet', maxMintsPerWallet)
        console.log('numUploadedTokens', numUploadedTokens)
        console.log('numMintedTokens', numMintedTokens)
        console.log('__________________________')
        if (maxMintsPerWallet === undefined) {
            setMaxAmount(0)
        } else {
            // setMaxAmount(Math.min(maxMintsPerWallet, numUploadedTokens - numMintedTokens))
            setMaxAmount(maxMintsPerWallet - numMintedTokens)
        }
    }, [candyMachineData])

    const handlerChangeAmountNft = (value: number) => {
        const newValue = mintInfo.numToMint + value
        if (newValue >= 0 && newValue <= maxAmount) {
            // setAmount(newValue)
            setMintInfo({...mintInfo, numToMint: newValue})
        }

    }

    const mint = async () => {
        if (error) {
            setError(null)
            return
        }

        console.log('wallet.account?.address?.toString()', wallet.account?.address?.toString());
        if (wallet.account?.address?.toString() === undefined || mintInfo.minting) {
            return
        }

        setMintInfo({...mintInfo, minting: true})
        // Generate a transaction
        const payload = {
            type: "entry_function_payload",
            function: `${CONTRACT_ADDRESS}::candy_machine_v2::mint_tokens`,
            type_arguments: [],
            arguments: [
                candyMachineAddress,
                collectionName,
                mintInfo.numToMint,
            ]
        };
        //
        let txInfo;
        try {
            const txHash = await wallet.signAndSubmitTransaction(payload);
            console.log('txHash', txHash);
            txInfo = await aptosClient.waitForTransactionWithResult(txHash.hash)
        } catch (err) {
            txInfo = {
                success: false,
                vm_status: err.message,
            }
        }
        //
        console.log('txInfo', txInfo)
        await handleMintTxResult(txInfo)

        if (txInfo.success) {
            const {data: {numMintedTokens}} = candyMachineData
            const {numToMint} = mintInfo

            setCandyMachineData(prev => {
                const newData = {...prev}
                newData.data.numMintedTokens = (Number(numMintedTokens) + Number(numToMint)).toString()
                return newData
            })
        }
    }


    async function handleMintTxResult(txInfo) {
        const mintSuccess = txInfo.success;

        console.log(mintSuccess ? "Mint success!" : `Mint failure, an error occurred.`)
        let mintedNfts = []
        if (!mintSuccess) {
            /// Handled error messages
            //
            // const handledErrorMessages = new Map([
            //     ["Failed to sign transaction", "An error occured while signing."],
            //     ["Move abort in 0x1::coin: EINSUFFICIENT_BALANCE(0x10006): Not enough coins to complete transaction", "Insufficient funds to mint."],
            // ]);
            // const txStatusError = txInfo.vm_status;
            // console.log('txInfo.vm_status error', txInfo.vm_status)
            // console.error(`Mint not successful: ${txStatusError}`);
            // let errorMessage = handledErrorMessages.get(txStatusError);
            // console.log('errorMessage', errorMessage)
            // setError(errorMessage)
            // errorMessage = errorMessage === undefined ? "Unkown error occured. Try again." : errorMessage;
            setError('Error')
        } else {
            const {data: {tokenDataHandle, cmResourceAccount}} = candyMachineData
            mintedNfts = await cmHelper.getMintedNfts(aptosClient, tokenDataHandle, cmResourceAccount, collectionName, txInfo)
        }
        setMintInfo({...mintInfo, minting: false, success: mintSuccess, mintedNfts})
    }

    async function fetchCandyMachineData(indicateIsFetching = false) {
        console.log("Fetching candy machine data...")
        if (indicateIsFetching) {
            setIsFetchignCmData(true)
        }
        const cmResourceAccount = await cmHelper.getCandyMachineResourceAccount();
        console.log('cmResourceAccount', cmResourceAccount)
        if (cmResourceAccount === null) {
            setCandyMachineData({...candyMachineData, data: {}})
            setIsFetchignCmData(false)
            return
        }

        const collectionInfo = await cmHelper.getCandyMachineCollectionInfo(cmResourceAccount);
        console.log('collectionInfo', collectionInfo);
        const configData = await cmHelper.getCandyMachineConfigData(collectionInfo.candyMachineConfigHandle);
        console.log('configData', configData);
        setCandyMachineData({...candyMachineData, data: {cmResourceAccount, ...collectionInfo, ...configData}})
        setIsFetchignCmData(false)
    }

    useEffect(() => {
        if (mintInfo.success && mintInfo.mintedNfts?.length > 0) {
            dispatch(changeMintedImages(mintInfo.mintedNfts))
            dispatch(changeCurrentPopup('success'))
        }
    }, [mintInfo.success])

    // function verifyTimeLeftToMint() {
    //     const mintTimersTimeout = setTimeout(verifyTimeLeftToMint, 1000)
    //
    //     const {data: {presaleMintTime, publicMintTime}} = candyMachineData
    //     if (presaleMintTime === undefined || publicMintTime === undefined) {
    //         return
    //     }
    //
    //     const currentTime = Math.round(new Date().getTime() / 1000);
    //     setTimeLeftToMint({
    //         timeout: mintTimersTimeout,
    //         presale: cmHelper.getTimeDifference(currentTime, presaleMintTime),
    //         public: cmHelper.getTimeDifference(currentTime, publicMintTime)
    //     })
    // }

    useEffect(() => {
        void fetchCandyMachineData(true)
        // const refetchTimer = setInterval(fetchCandyMachineData, autoCmRefresh)
        //
        // return () => {
        //     clearInterval(refetchTimer)
        // }
    }, [])

    // useEffect(() => {
    //     clearTimeout(timeLeftToMint.timeout)
    //     verifyTimeLeftToMint()
    //     console.log(candyMachineData.data)
    //
    //     return () => {
    //         clearTimeout(timeLeftToMint.timeout)
    //     }
    // }, [candyMachineData])


    // useEffect(() => {
    //     setCanMint(true)
    // }, [wallet, candyMachineData, timeLeftToMint])


    return (
        <PopupLayout>
            <div className={styles.popup}>
                <span className={styles.title}>buy NFT with $DC</span>
                <span className={classNames(styles.error, {
                    [styles.active]: error
                })}>
                    {error}
                </span>

                <div className={styles.buttons}>
                    <div className={styles.counter}>
                        <span onClick={() => handlerChangeAmountNft(-1)} className={styles.minus}>-</span>
                        <span className={styles.value}>{mintInfo.numToMint}</span>
                        <span onClick={() => handlerChangeAmountNft(1)} className={styles.plus}>+</span>
                    </div>

                    <Button
                        onClick={mint}
                        className={classNames(styles.button, {
                            [styles.disabled]: maxAmount === 0,
                            [styles.loading]: mintInfo.minting,
                            [styles.errorBtn]: error
                        })}
                    >
                        {
                            !mintInfo.minting && !error &&
                            <span className={styles.text}>
                                    {/*{*/}
                                {/*    isApprove*/}
                                {/*        ? 'click to buy'*/}
                                {/*        : 'approve $DC'*/}
                                {/*}*/}
                                mint
                            </span>
                        }

                        {
                            mintInfo.minting && <LoadingButton/>
                        }

                        {
                            error && <ErrorButton/>
                        }
                    </Button>
                </div>

                <span
                    className={styles.available}>
                    {maxAmount}
                    /
                    {candyMachineData?.data?.maxMintsPerWallet || 0} available
                </span>
            </div>
        </PopupLayout>
    )
}

export default PopupBuyNft

