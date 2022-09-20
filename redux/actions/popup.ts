import {TypeCurrentPopup} from "../reducers/popup";

export const changeCurrentPopup = (currentPopup: TypeCurrentPopup) => ({
    type: 'CHANGE_CURRENT_POPUP',
    currentPopup
})