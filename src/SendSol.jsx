import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

export function SendSol() {
    const wallet = useWallet();
    const {connection} = useConnection();

    async function onClick() {
        let to = document.getElementById("to").value;
        let sols = document.getElementById("amount").value;

        const transaction = new Transaction();

        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(to),
            lamports: sols * LAMPORTS_PER_SOL
        }));

        await wallet.sendTransaction(transaction,connection);
        alert("Sent " + sols + "SOL to " + to);
    }

    return(
        <div>
            <input id="to" type="text" placeholder="Receiver's Address"></input>
            <input  id="amount" type="text" placeholder="Amount"></input>
            <button onClick={onClick}>Send SOL</button>
        </div>
    );
}