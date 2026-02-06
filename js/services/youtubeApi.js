const baseURL = "https://www.googleapis.com/youtube/v3/";


export async function getChannelInfo(tokenClient) {
    try {
        const response = await fetch(`${baseURL}channels?part=snippet,contentDetails,statistics&mine=true`, {
            headers: {
                Authorization: `Bearer ${tokenClient}`,
                Accept: 'application/json'
            }
        });

        const dataID = await response.json();
        return dataID;

    } catch (error) {
        console.error("Error fetching channel info:", error);
        throw error;
    }
}

export async function getChannelSubs(tokenClient) {
    try {
        const response = await fetch(`${baseURL}subscriptions?part=snippet&mine=true&maxResults=20`, {
            headers: {
                Authorization: `Bearer ${tokenClient}`,
                Accept: 'application/json',
            }
        });

        const dataSUBS = await response.json();
        return dataSUBS;

    } catch (error) {
        console.error("Error fetching channel subscriptions:", error);
        throw error;
    }
}

export async function getLikedvideos(tokenClient) {
    try {
        const response = await fetch(`${baseURL}videos?part=snippet,contentDetails&myRating=like&maxResults=50`, {
            headers: {
                Authorization: `Bearer ${tokenClient}`,
                Accept: 'application/json',
            }
        });

        const dataPLAYLISTS = await response.json();
        return dataPLAYLISTS;

    } catch (error) {
        console.error("Error fetching user playlists:", error);
        throw error;
    }
}

export async function getChannelIcon(token, channelId) {
    const response = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json'
            }
        }
    );

    const data = await response.json();
    return data;
}

