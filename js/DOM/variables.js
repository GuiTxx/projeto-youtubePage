// VALORES GLOBAIS MODULARES

export const appData = {
  thumb_my: null,
  id_channel: null,
  subsThumb: [],
  videosPlay: [],
  logo_channel: []
};
export function setIDChannel(value) {
  appData.id_channel = value;
}

export function setThumbMy(value) {
  appData.thumb_my = value;
}

export function setSubsThumb(value) {
  appData.subsThumb = value;
}

export function setVideosPlay(value) {
  appData.videosPlay = value;
}

export function setLogoChannel(value) {
  appData.logo_channel = value;
}