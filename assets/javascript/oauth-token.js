const petFinderKey = "9pxAF85YH8bMvZlvyMCUsa0a8fKibR65rzf4Mu8IJizesNiKKN";
const petFinderSecret = "XUuaPBK2gNLX0n40MiHrKH4ps3ow0UMJHhD38hTk";
export default async (req, res) => {
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");
    params.append("client_id", petFinderKey);
    params.append("client_secret", petFinderSecret);
    const petfinderRes = await fetch(
        "https://api.petfinder.com/v2/oauth2/token" ,
        { 
        method: "POST",
        body:params
        }
    );
    const data = await petfinderRes.json();
    res.send(data);
};