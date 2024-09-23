import { SecretNetworkClient, Wallet, coinsFromString } from "secretjs"
import dotenv from "dotenv"
dotenv.config()

const wallet = new Wallet(process.env.MNEMONIC)
// const wallet = new Wallet("desk pigeon hammer sleep only mistake stool december offer patrol once vacant")

console.log(wallet.address)

const secretjs = new SecretNetworkClient({
  chainId: "pulsar-3",
  url: "https://api.pulsar3.scrttestnet.com",
  wallet: wallet,
  walletAddress: wallet.address,
})

let contractAddress ="secret1m8xe3af7w0e6hhvjjcklfke54807v7c938dqew"
let contractCodeHash ="9e49d31cc0280e02f0bbba8ceec5f712906438808e25b617f0fd0e572c013489"

let set_viewing_key = async () => {

    const tx = await secretjs.tx.compute.executeContract(
        {
          sender: wallet.address,
          contract_address: contractAddress,
          msg: {
            set_viewing_key: {
                key: "test2",
            },
          },
          code_hash: contractCodeHash,
        },
        { gasLimit: 1_000_000 }
      );
    
      console.log(tx);

}
// set_viewing_key().catch((error) => {
//   console.error("Error:", error)
// })

