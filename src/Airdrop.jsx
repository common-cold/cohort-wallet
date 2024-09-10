import {useWallet, useConnection} from "@solana/wallet-adapter-react"

export function Airdrop() {
    
    //hooks in react
    const wallet = useWallet();
    const {connection} = useConnection();

    async function sendAirdopToUser() {
       await connection.requestAirdrop(wallet.publicKey, 1000000000)
       alert("airdropped SOL")
    }


    return <div>    
        <input type="text" placeholder="Amount"></input>
        <button onClick={sendAirdopToUser}>Send Airdop</button>
    </div>
}