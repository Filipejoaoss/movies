import axios from "axios";

//Url: https://api.themoviedb.org/3/
//URL da API: https://api.themoviedb.org/3/movie/now_playing?api_key=6c291e9ab019165da377dc4b91b8c673

const api = axios.create({
   baseURL: 'https://api.themoviedb.org/3/'
});

export default api;