export const candyMachineAddress = "0x72d6fffdc913693ed1c2c46f93a6688a87a058efb31a0de34b07617de96bfe33";
export const collectionName = "Aptos Collection"; // Case sensitive!
export const collectionCoverUrl = "https://cloudflare-ipfs.com/ipfs/QmeCuKGLvAGrBAPGdaRh2hkTjXsXuk8VEUHNoYRD4cJG51";
export const mode: 'dev' | 'test' | 'mainnet' = "test"; // "dev" or "test" or "mainnet"

export let NODE_URL;
export const CONTRACT_ADDRESS = "0xdf5c814388f4162f353e14f6123fcba8f39a958e4a2640e38e9e2c7cdfd2ac1d";
export const COLLECTION_SIZE = 10
let FAUCET_URL;
// @ts-ignore
if (mode == "dev") {
    NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
} else if (mode === "test") {
    NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
} else {
    NODE_URL = "https://fullnode.mainnet.aptoslabs.com/v1";
    FAUCET_URL = null;
}
