const params = new URLSearchParams(window.location.search);
const movieId = params.get('movie');

const iframeUrls = {
  1: "https://ok.ru/videoembed/757432584936",
  // Agrega más links cuando los tengas:
  2: "https://ok.ru/videoembed/XXXX",
  3: "https://ok.ru/videoembed/YYYY",
  4: "https://ok.ru/videoembed/ZZZZ",
  5: "https://ok.ru/videoembed/AAAA",
};

if (movieId && iframeUrls[movieId]) {
  document.getElementById('video-frame').src = iframeUrls[movieId];
}


