import { reactive } from 'vue';

export const store = reactive ({
    apiUrl: 'https://api.themoviedb.org/3/search/',

    apiParams: {
        api_key: 'e46a0a09ebf9f16cbcaab9d498750ab0',
        language: 'it-IT',
        query: 'barbie',
    },
    movie: [],
    tv: [],
    // imagelin: 'https://image.tmdb.org/t/p/w342/'
})