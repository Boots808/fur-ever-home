import { useEffect, createContext, Component, useState } from "react";

const AuthContext = createContext();
const petFinderKey = "9pxAF85YH8bMvZlvyMCUsa0a8fKibR65rzf4Mu8IJizesNiKKN";
const petFinderSecret = "XUuaPBK2gNLX0n40MiHrKH4ps3ow0UMJHhD38hTk";
function MyApp({ Component, pageProps }) {
    const [accessToken, setAccessToken] = useState(null);

    useEffect(()=>{
        const fetchAccessToken = async () => {
            const params = new URLSearchParams();
            params.append("grant_type", "client_credentials");
            params.append("client_id", petFinderKey);
            params.append("client_secret", petFinderSecret);
            const petfinderRes = await fetch()
        }
    }, []);
    
    return(
        <AuthContext.Provider>
        <Component {...pageProps} />
        </AuthContext.Provider>
};
export default MyApp;