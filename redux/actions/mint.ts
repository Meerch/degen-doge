import {TypeMintedImages} from "../reducers/mint";

export const changeMintedImages = (payload: TypeMintedImages) => ({
    type: 'CHANGE_MINTED_IMAGES',
    payload
})