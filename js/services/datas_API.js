// FUNÇÕES FETCH PARA A REQUISIÇÃO DE DADOS DA API YOUTUBE V3
import { 
    api_ChannelData, 
    api_ChannelInfo, 
    api_ChannelSubs, 
    api_Likedvideos
} from './youtube_API_requests.js';

// GETTING DATA FROM API

export async function data_thumb_MyCha(token) {
    const data = await api_ChannelInfo(token);
    return data.items[0].snippet.thumbnails.default.url;
}

export async function data_subs(token) {
    const data = await api_ChannelSubs(token);
    const subsThumb = [];

    data.items.forEach(async(channel) => {
        const dataChannel = await api_ChannelData(token, channel.snippet.resourceId.channelId);
        subsThumb.push({
            "nome": channel.snippet.title,
            "logo": channel.snippet.thumbnails.default.url,
            "custom_url": `https://www.youtube.com/${dataChannel.items[0].snippet.customUrl}`
        });
    });

    return subsThumb;
}

export async function data_likedVideos(token) {
    const data = await api_Likedvideos(token);

    return data.items.map(element => ({
        url: `https://www.youtube.com/watch?v=${element.id}`,
        duration: element.contentDetails.duration,
        title_channel: element.snippet.channelTitle,
        title_video: element.snippet.localized?.title ?? element.snippet.title,
        publi_date: element.snippet.publishedAt,
        thumb_video:
            element.snippet.thumbnails?.standard?.url ||
            element.snippet.thumbnails?.high?.url ||
            element.snippet.thumbnails?.medium?.url ||
            element.snippet.thumbnails?.default?.url
    }));
}

export async function data_iconsLIKED_videos(token) {
    const liked = await api_Likedvideos(token);

    const icons = await Promise.all(
        liked.items.map(video =>
            api_ChannelData(token, video.snippet.channelId)
                .then(data =>
                    data.items[0].snippet.thumbnails.default.url
                )
        )
    );

    return icons;
}