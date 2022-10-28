import React, {useEffect, useState} from 'react'
import styles from './PopupBuyNft.module.scss'
import Button from "../../UI/Button"
import PopupLayout from "../PopupLayout"
import classNames from "classnames"
import {ErrorButton} from "./StatesButton/ErrorButton"
import LoadingButton from "./StatesButton/LoadingButton"
import {useMint} from "./useMint"
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
    const [isFetchignCmData, setIsFetchignCmData] = useState(false)
    const [candyMachineData, setCandyMachineData] = useState<CandyMachine>({data: {}, fetch: fetchCandyMachineData})
    const [timeLeftToMint, setTimeLeftToMint] = useState<any>({presale: "", public: "", timeout: null})
    // const [amount, setAmount] = useState(0)
    const [mintInfo, setMintInfo] = useState<MintInfo>({numToMint: 1, minting: false, success: false, mintedNfts: []})
    const [canMint, setCanMint] = useState(false)
    const max = candyMachineData.data.maxMintsPerWallet === undefined ? 10 : Math.min(candyMachineData.data.maxMintsPerWallet, candyMachineData.data.numUploadedTokens - candyMachineData.data.numMintedTokens)


    const handlerChangeAmountNft = (value: number) => {
        const newValue = mintInfo.numToMint + value
        if (newValue >= 0 && newValue <= max) {
            // setAmount(newValue)
            setMintInfo({...mintInfo, numToMint: newValue})
        }

    }

    const mint = async () => {
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

        console.log('txInfo', txInfo)
        await handleMintTxResult(txInfo)
        if (txInfo.success) setCandyMachineData({...candyMachineData, data: {...candyMachineData.data, numMintedTokens: (parseInt(candyMachineData.data.numMintedTokens) + Number(mintInfo.numToMint)).toString()}})
    }


    async function handleMintTxResult(txInfo) {
        console.log(txInfo);
        const mintSuccess = txInfo.success;

        console.log(mintSuccess ? "Mint success!" : `Mint failure, an error occured.`)
        let mintedNfts = []
        if (!mintSuccess) {
            /// Handled error messages

            const handledErrorMessages = new Map([
                ["Failed to sign transaction", "An error occured while signing."],
                ["Move abort in 0x1::coin: EINSUFFICIENT_BALANCE(0x10006): Not enough coins to complete transaction", "Insufficient funds to mint."],
            ]);
            const txStatusError = txInfo.vm_status;
            console.error(`Mint not successful: ${txStatusError}`);
            let errorMessage = handledErrorMessages.get(txStatusError);
            errorMessage = errorMessage === undefined ? "Unkown error occured. Try again." : errorMessage;
        } else {
            mintedNfts = await cmHelper.getMintedNfts(aptosClient, candyMachineData.data.tokenDataHandle, candyMachineData.data.cmResourceAccount, collectionName, txInfo)
        }
        setMintInfo({...mintInfo, minting: false, success: mintSuccess, mintedNfts})

    }

    async function fetchCandyMachineData(indicateIsFetching = false) {
        console.log("Fetching candy machine data...")
        if (indicateIsFetching) setIsFetchignCmData(true)
        const cmResourceAccount = await cmHelper.getCandyMachineResourceAccount();
        if (cmResourceAccount === null) {
            setCandyMachineData({...candyMachineData, data: {}})
            setIsFetchignCmData(false)
            return
        }

        const collectionInfo = await cmHelper.getCandyMachineCollectionInfo(cmResourceAccount);
        const configData = await cmHelper.getCandyMachineConfigData(collectionInfo.candyMachineConfigHandle);
        setCandyMachineData({...candyMachineData, data: {cmResourceAccount, ...collectionInfo, ...configData}})
        setIsFetchignCmData(false)
    }

    function verifyTimeLeftToMint() {
        const mintTimersTimeout = setTimeout(verifyTimeLeftToMint, 1000)
        if (candyMachineData.data.presaleMintTime === undefined || candyMachineData.data.publicMintTime === undefined) {
            return
        }

        const currentTime = Math.round(new Date().getTime() / 1000);
        setTimeLeftToMint({
            timeout: mintTimersTimeout,
            presale: cmHelper.getTimeDifference(currentTime, candyMachineData.data.presaleMintTime),
            public: cmHelper.getTimeDifference(currentTime, candyMachineData.data.publicMintTime)
        })
    }

    useEffect(() => {
        void fetchCandyMachineData(true)
        const timer = setInterval(fetchCandyMachineData, autoCmRefresh)

        return () => {
            clearInterval(timer)
        }
    }, [])

    useEffect(() => {
        clearTimeout(timeLeftToMint.timeout)
        verifyTimeLeftToMint()
        console.log(candyMachineData.data)

        return () => {
            clearTimeout(timeLeftToMint.timeout)
        }
    }, [candyMachineData])


    useEffect(() => {
        setCanMint(true)
    }, [wallet, candyMachineData, timeLeftToMint])


    return (
        <PopupLayout>
            <div className={styles.popup}>
                <span className={styles.title}>buy NFT with $DC</span>

                <div className={styles.buttons}>
                    <div className={styles.counter}>
                        <span onClick={() => handlerChangeAmountNft(-1)} className={styles.minus}>-</span>
                        <span className={styles.value}>{mintInfo.numToMint}</span>
                        <span onClick={() => handlerChangeAmountNft(1)} className={styles.plus}>+</span>
                    </div>

                    <Button
                        onClick={mint}
                        className={classNames(styles.button, {
                            // [styles.disabled]: !canMint,
                            [styles.loading]: mintInfo.minting,
                            // [styles.error]: !canMint
                        })}
                    >
                        {
                            !mintInfo.minting &&
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

                        {/*{*/}
                        {/*    !canMint && <ErrorButton/>*/}
                        {/*}*/}
                    </Button>
                </div>

                <span className={styles.available}>1/{max} available</span>

                {
                    mintInfo.success &&
                    <div style={{flexWrap: "wrap"}}>
                        {
                            mintInfo.mintedNfts.map(mintedNft => <div key={mintedNft.name}>
                                <img src={mintedNft.imageUri === null ? "" : mintedNft.imageUri}/>
                                <h5>{mintedNft.name}</h5>
                            </div>)
                        }
                    </div>
                }
            </div>
        </PopupLayout>
    )
}

export default PopupBuyNft

