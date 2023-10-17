<script>
import { store } from './data/store';
import axios from 'axios';
import Header from './components/Header.vue';
import MainContainer from './components/MainContainer.vue';

export default {
    name: 'App',

    data() {
        return{
            store
        }
    },
 
    components: {
        Header,
        MainContainer
    },
    methods: {
        getApi(){
            axios.get(store.apiUrl + '?query=barbie&api_key=e46a0a09ebf9f16cbcaab9d498750ab0&language=it-IT' , {
                params: store.apiParams
            })
            
           
            .then(res => {
                store.movie = res.data.results;
                console.log(store.movie);
            })
            .catch(err => {
                console.log(err);
            })
        }
    },
    mounted(){
        this.getApi()
    }
}
</script>

<template>
  <Header @startSearch="getApi" />
  <MainContainer />
</template>

<style lang="scss">
    @use './scss/vars' as *;
    @use './scss/general' as *;

    body {
        margin: 0;
        padding: 0;
    }

</style>