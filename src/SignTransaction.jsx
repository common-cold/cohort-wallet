//On click
//encode message into byte-array
//sign the message
//verify the signature
//show msg according to verification

import {ed25519} from "@noble/curves/ed25519"
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import bs58 from "bs58";
import React from "react"

export function SignTransaction() {
    const {publicKey, signMessage} = useWallet();
    const {connection} = useConnection();

    async function onClick() {
        if(!publicKey) throw new Error("Wallet not connected!");
        if(!signMessage) throw new Error("Wallet does not support mesage signing!");
        
        const message = document.getElementById("message").value;
        const encodedMessage = new TextEncoder().encode(message);
        const signature = await signMessage(encodedMessage);

        if(!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) throw new Error("Message signature invalid");
        alert('success', `Message signature: ${bs58.encode(signature)}`);
    }

    return (
        <div>
            <input type="text" placeholder="Message" id="message"></input>
            <button onClick={onClick}>Sign Message</button>
        </div>
    );
}