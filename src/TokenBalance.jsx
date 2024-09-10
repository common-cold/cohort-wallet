import {useConnection, useWallet} from "@solana/wallet-adapter-react"
import {TOKEN_PROGRAM_ID} from "@solana/spl-token"
export function TokenBalance(){
    const wallet = useWallet();
    const { connection } = useConnection();

    async function getTokenBalance() {
        const info = await connection.getParsedProgramAccounts(TOKEN_PROGRAM_ID);
        console.log(info);
    }

    return (
        <button onClick={getTokenBalance}>Get Token info</button>
    );
}