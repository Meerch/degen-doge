import type {NextPage} from 'next'
import Intro from '../components/Intro'
import Options from "../components/Options";
import React from "react";
import Info from '../components/Info';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import InterlineLayer from "../components/InterlineLayer";
import {useSelector} from "react-redux";
import {RootState} from "../redux/reducers";
import {TypeCurrentPopup} from "../redux/reducers/popup";
import PopupConnectWallet from "../components/Popup/PopupConnectWallet";
import PopupBuyNft from "../components/Popup/PopupBuyNft";
import PopupSuccess from "../components/Popup/PopupSuccess";

const Home: NextPage = () => {
    const {currentPopup}: { currentPopup: TypeCurrentPopup } = useSelector((state: RootState) => ({
        currentPopup: state.popup.currentPopup
    }))

    return (
        <div className='wrap'>
            {/*<Plug/>*/}
            <Intro/>
            <InterlineLayer/>
            <Options/>
            <Info/>
            <Faq/>
            <Footer/>

            {
                currentPopup === 'connect-wallet' &&
                <PopupConnectWallet />
            }
            {
                currentPopup === 'buy-nft' &&
                <PopupBuyNft />
            }
            {
                currentPopup === 'success' &&
                <PopupSuccess />
            }
        </div>
    )
}

export default Home