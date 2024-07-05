import axios from 'axios';

const API_KEY = 'G-hs8TpVld5QgPf-_7CSMjVHeZhKrT6Y8k7efylLEyQ';
const BASE_URL = 'https://api.unsplash.com/';

const unsplashAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Client-ID ${API_KEY}`,
  },
});

async function fetchPhotoSearch(query, page) {
  const response = await unsplashAPI.get('search/photos/', {
    params: { query, page, per_page: 20 },
  });

  return response.data;
}

export default fetchPhotoSearch;
