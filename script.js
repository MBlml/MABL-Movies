const params = new URLSearchParams(window.location.search);
const movieId = params.get('movie');

const videoUrls = {
  1: "URL_PELICULA_1.mp4",
  2: "URL_PELICULA_2.mp4",
  3: "URL_PELICULA_3.mp4",
  4: "URL_PELICULA_4.mp4",
  5: "URL_PELICULA_5.mp4",
};

if (movieId && videoUrls[movieId]) {
  document.getElementById('video-source').src = videoUrls[movieId];
  document.getElementById('video-player').load(); // no auto play
}
