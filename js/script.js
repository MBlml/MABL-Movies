const params = new URLSearchParams(window.location.search);
const movieId = params.get("movie");

// Diccionario de iframes completos por ID
const iframes = {
  1: `<iframe src="https://cybervynx.com/e/wtecc4h2vzp8" 
          frameborder="0" 
          marginwidth="0" 
          marginheight="0" 
          scrolling="no"
          width=640 
          height=360
          allowfullscreen></iframe>`,
  2: `<iframe src="https://cybervynx.com/e/mev5ty8vlk61" 
          frameborder="0" 
          marginwidth="0" 
          marginheight="0" 
          scrolling="no"
          width=640 
          height=360 
          allowfullscreen></iframe>`,
  3: `<iframe src="https://uqload.net/embed-yoqeuocey0ob.html" 
          frameborder="0" 
          marginwidth="0" 
          marginheight="0" 
          scrolling="no"
          width=640 
          height=360 
          allowfullscreen></iframe>`,
  4: `<iframe src="https://uqload.net/embed-vg83p6x8v8aa.html" 
          frameborder="0" 
          marginwidth="0" 
          marginheight="0" 
          scrolling="no"
          width=640 
          height=360 
          allowfullscreen></iframe>`,
  5: ``,
  6: ``,
  7: ``,
  8: ``,
  9: ``,
  10: ``,
};

const container = document.getElementById("iframe-container");

if (movieId && iframes[movieId]) {
  container.innerHTML = iframes[movieId];
} else {
  container.innerHTML = "<p style='text-align:center;'>Película no disponible.</p>";
}
