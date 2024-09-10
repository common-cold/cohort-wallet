import {useConnection, useWallet} from "@solana/wallet-adapter-react"
import {LAMPORTS_PER_SOL} from "@solana/web3.js"

export function Balance() {
    const {connection}= useConnection();
    const wallet = useWallet();

    
    async function getBalance() {
        const lamports = await connection.getBalance(wallet.publicKey);
        const balance = lamports/LAMPORTS_PER_SOL;
        document.getElementById("balance").innerHTML = balance
    }

    if(wallet.publicKey){
        getBalance();
    }
    return(
        <div>
            <p>SOL balance :</p>  <div id="balance"></div>
        </div>
    );
    
}
