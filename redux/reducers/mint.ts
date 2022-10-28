export type TypeMintedImages= any

export type TypeInitialStatePopup = {
    mintedImages: TypeMintedImages
}

const initialState: TypeInitialStatePopup = {
    mintedImages: []
}

const popup = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_MINTED_IMAGES':
            return {
                ...state,
                mintedImages: action.payload
            }
        default:
            return state
    }
}

export default popup