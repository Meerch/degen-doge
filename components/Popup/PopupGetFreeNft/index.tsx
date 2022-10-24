import React, {useEffect, useState} from 'react'
import styles from './PopupGetFreeNft.module.scss'
import PopupLayout from "../PopupLayout";
import Button from '../../UI/Button';
import classNames from "classnames";
import {useAccount, useContractRead, useContractWrite, usePrepareContractWrite, useWaitForTransaction} from "wagmi";
// import {generateContractDogesSetting} from "../../../blockchain/utils";
import {changeCurrentPopup} from "../../../redux/actions/popup";
import {useDispatch} from "react-redux";
import LoadingButton from "../PopupBuyNft/StatesButton/LoadingButton";
import {ErrorButton} from "../PopupBuyNft/StatesButton/ErrorButton";

const PopupGetFreeNft = () => {
    // const {address} = useAccount()
    // const dispatch = useDispatch()
    // const [isCanClaim, setIsCanClaim] = useState(false)
    // const [isAlreadyClaimed, setIsAlreadyClaimed] = useState(false)
    // // const {data: infoClaim} = useContractRead('getClaimStatus', {
    // //     args: address,
    // //     onSuccess: data => console.log('isCanClaim', data),
    // //     onError: data => console.log('error', data)
    // //     // select: data => toWei(formatEther(data))
    // // })
    // const [isErrorClaim, setIsErrorClaim] = useState(false)
    //
    // useEffect(() => {
    //     if (infoClaim && Array.isArray(infoClaim)) {
    //         setIsCanClaim(infoClaim[0])
    //         setIsAlreadyClaimed(infoClaim[1])
    //     }
    // }, [infoClaim])
    //
    // const {config: configClaimNft} = usePrepareContractWrite(generateContractDogesSetting('claimMyNft', {}))
    // const {write: writeClaimNft, data: dataClaimNft} = useContractWrite(configClaimNft)
    // const {isLoading: isLoadingClaim, isSuccess: isSuccessClaim = false} = useWaitForTransaction({
    //     hash: dataClaimNft?.hash,
    //     onError: () => setIsErrorClaim(true)
    // })
    //
    // const isProcess = isLoadingClaim || isErrorClaim
    //
    // const onClickMainButton = () => {
    //     if (isLoadingClaim) {
    //         return
    //     }
    //
    //     if (isErrorClaim) {
    //         setIsErrorClaim(false)
    //     }
    //
    //     if (isCanClaim && !isAlreadyClaimed) {
    //         writeClaimNft && writeClaimNft()
    //     }
    // }
    //
    // useEffect(() => {
    //     if (isSuccessClaim) {
    //         dispatch(changeCurrentPopup('success'))
    //     }
    // }, [isSuccessClaim])
    //
    // return (
    //     <PopupLayout className={styles.popup}>
    //         <span className={styles.title}>Claim Free NFT on APTOS</span>
    //         <Button
    //             onClick={onClickMainButton}
    //             className={classNames(styles.button, {
    //                 [styles.notAvailable]: true,
    //                 [styles.claimed]: true,
    //                 [styles.loading]: isLoadingClaim,
    //                 [styles.error]: isErrorClaim
    //             })}
    //         >
    //             {!isProcess && !isCanClaim && "not available"}
    //             {!isProcess && isCanClaim && !isAlreadyClaimed && "claim nft"}
    //             {!isProcess && isCanClaim && isAlreadyClaimed && "claimed"}
    //             {isLoadingClaim && <LoadingButton/>}
    //             {isErrorClaim && <ErrorButton />}
    //         </Button>
    //         {/*<span>loading...</span>*/}
    //         <span className={styles.available}>
    //             {
    //                 isCanClaim && !isAlreadyClaimed ? 1 : 0
    //             }
    //             /
    //             {isCanClaim ? 1 : 0} available
    //         </span>
    //     </PopupLayout>
    // )
}

export default PopupGetFreeNft
