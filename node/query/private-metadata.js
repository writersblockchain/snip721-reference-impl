import { SecretNetworkClient } from "secretjs"
import dotenv from "dotenv"
dotenv.config()

let contractAddress ="secret1m8xe3af7w0e6hhvjjcklfke54807v7c938dqew"
let contractCodeHash ="9e49d31cc0280e02f0bbba8ceec5f712906438808e25b617f0fd0e572c013489"

let private_metadata = async () => {
  const secretjs = new SecretNetworkClient({
    url: "https://lcd.testnet.secretsaturn.net",
    chainId: "pulsar-3",
  })

  const query_tx = await secretjs.query.compute.queryContract({
    contract_address: contractAddress,
    code_hash: contractCodeHash,
    query: { private_metadata: {
        token_id: "0",
        viewer: {
            address: "secret1verdmwf2e0d930vulxru5fg3lm9y8r3xg5u7l6",
            viewing_key: "test2"
        }

    } },
  })
  console.log(query_tx)
}

private_metadata()


// wallet 1
// secret1j7n3xx4sfgjea4unghd78qvnvxdz49cxmrkqlj
// test

// wallet 2
// secret1verdmwf2e0d930vulxru5fg3lm9y8r3xg5u7l6
// test2

