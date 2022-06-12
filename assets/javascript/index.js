// petfinder API link 9pxAF85YH8bMvZlvyMCUsa0a8fKibR65rzf4Mu8IJizesNiKKN
// Secret XUuaPBK2gNLX0n40MiHrKH4ps3ow0UMJHhD38hTk


import { useContext, useEffect, useState } from "react"
export default () => {
    const [results, setResults] = useState(null)
    const accessToken = useContext(Auth)
    useEffect(() => {
        if (accessToken === null) return;
        const fetchPets = async () => {
            const petResults = await fetch(
                "https://api.petfinder.com/v2/animals?location=55125",
                {
                    headers: {
                        Authorization:'Bearer ${accessToken}',
                    },
                }
            );
            const json = await petResults.json();
            setResults(json.animals);
        };
        fetchPets();
    }, [accessToken]);
    if (results === null) return null;
    return <ResultPane results ={results} />;
};