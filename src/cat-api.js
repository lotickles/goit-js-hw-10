const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_bUfonT6hR3e9AxpIejPwlXA7kpJxAT28qsBpBYJaaBeZ6qk73Hb2HtKoBBr5Frkd';

//fetch all the breeds of the dropdwon
export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    } else {
      return res.json();
    }
  });
}
//fetch buy selected breed only
export function fetchCatByBreed(breedId) {
  return fetch(
    `${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
  ).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    } else {
      return res.json();
    }
  });
}
