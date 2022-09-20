export type TypeCurrentPopup = null | 'connect-wallet' | 'buy-nft' | 'success'

export type TypeInitialStatePopup = {
    currentPopup: TypeCurrentPopup
}

const initialState: TypeInitialStatePopup = {
    currentPopup: null
}

const popup = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_CURRENT_POPUP':
            return {
                ...state,
                currentPopup: action.currentPopup
            }
        default:
            return state
    }
}

export default popup