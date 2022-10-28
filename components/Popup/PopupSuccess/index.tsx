import React, {useEffect, useState} from 'react'
import styles from './PopupSuccess.module.scss'
import PopupLayout from "../PopupLayout";
import Button from '../../UI/Button';
import {useDispatch, useSelector} from "react-redux";
import {changeCurrentPopup} from "../../../redux/actions/popup";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
import classNames from "classnames";
import {RootState} from "../../../redux/reducers";
import useSound from 'use-sound';
// @ts-ignore
import soundSuccessMint from '../../../public/sounds/successMint.mp3'
import Image from "next/image";

SwiperCore.use([Navigation])


const PopupSuccess = () => {
    const dispatch = useDispatch()
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    const [progressGallery, setProgressGallery] = useState(0)
    const [activeSlide, setActiveSlide] = useState(1)
    const mintedImages = useSelector((state: RootState) => state.mint.mintedImages)
    const [playSoundSuccessMint, {stop}] = useSound(soundSuccessMint, {
        volume: 0.6
    })

    const handlerClick = () => {
        dispatch(changeCurrentPopup(null))
    }

    useEffect(() => {
        playSoundSuccessMint()

        return () => {
            stop()
        }
    }, [playSoundSuccessMint, stop])

    return (
        <PopupLayout className={styles.popup}>
            <div className={styles.progress}/>
            <span className={styles.title}>Congrats!!!</span>
            <div className={styles.galleryWrapper}>
                <img
                    ref={navigationPrevRef}
                    src='/images/arrow.png'
                    className={classNames(styles.arrow, {
                        [styles.inactive]: progressGallery === 0
                    })}
                    alt='-->'
                />
                <Swiper
                    className={styles.gallery}
                    slidesPerView={1}
                    spaceBetween={50}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        // @ts-ignore
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        // @ts-ignore
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                    }}
                    onSlideChange={(swiper) => {
                        setProgressGallery(swiper.progress)
                        setActiveSlide(swiper.activeIndex + 1)
                    }}
                >
                    {
                        mintedImages.map((mintedNft) => (
                            <SwiperSlide key={mintedNft.name} className={styles.nftImage}>
                                <Image
                                    placeholder='blur'
                                    blurDataURL='https://krot.info/uploads/posts/2020-01/1579314246_20-46.jpg'
                                    layout='fill'
                                    src={mintedNft.imageUri === null ? "" : mintedNft.imageUri}
                                    alt={mintedNft.name}
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

                <img
                    ref={navigationNextRef}
                    src='/images/arrow.png'
                    className={classNames(styles.arrow, {
                        [styles.inactive]: progressGallery === 1
                    })}
                    alt='<--'
                />
            </div>


            <span className={styles.currentCountImage}>{activeSlide}/{mintedImages?.length}</span>

            <div className={styles.description}>
                You are the proud owner of the strange NFT on APTOS!
            </div>

            <Button onClick={handlerClick} className={styles.button}>
                <span className={styles.text}>click to view</span>
            </Button>
        </PopupLayout>
    )
}

export default PopupSuccess
