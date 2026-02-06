// FUNÇÕES FETCH PARA A REQUISIÇÃO DE DADOS DA API YOUTUBE V3
import { getChannelIcon, getChannelInfo, getChannelSubs, getLikedvideos } from './youtube_API_requests.js';

// GETTING DATA FROM API

export async function thumb_MyCha(token) {
    const data = await getChannelInfo(token);
    return data.items[0].snippet.thumbnails.default.url;
}

export async function subsInfo(token) {
    const data = await getChannelSubs(token);
    const subsThumb = {};

    data.items.forEach(channel => {
        subsThumb[channel.snippet.title] =
            channel.snippet.thumbnails.default.url;
    });

    return subsThumb;
}

export async function likedVideos(token) {
    const data = await getLikedvideos(token);

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

export async function getIcon_likedVideos(token) {
    const liked = await getLikedvideos(token);

    const icons = await Promise.all(
        liked.items.map(video =>
            getChannelIcon(token, video.snippet.channelId)
                .then(data =>
                    data.items[0].snippet.thumbnails.default.url
                )
        )
    );

    return icons;
}