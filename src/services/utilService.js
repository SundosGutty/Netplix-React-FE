
export const utilService = {
    makeId,
    getUrl
}

function makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}


export const timeToShow = (time) => {
    let min = Math.round(Math.floor(time / 60));
    if (min.toString().length < 2) min = `0${min}`;
    let sec = Math.round(time - Math.floor(time / 60) * 60);
    if (sec.toString().length < 2) sec = `0${sec}`;
    return isNaN(min) || isNaN(sec) ? '00:00' : `${min}:${sec}`;
  };
  

function _getYoutubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp);
    return (match && match[2].length === 11)
        ? match[2]
        : null
}

function getUrl(trailerUrl) {
    const videoId = _getYoutubeId(trailerUrl)
    const videoLink = `https://www.youtube.com/embed/${videoId}?autoplay=1&muted=1`
    return videoLink
}

