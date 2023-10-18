<script>
import { store } from './data/store';
import axios from 'axios';
import Header from './components/Header.vue';
import MainContainer from './components/MainContainer.vue';

export default {
    name: 'App',

    data() {
        return{
            store,
            message: 'Effettuare una ricerca', 
        }
    },
 
    components: {
        Header,
        MainContainer
    },
    methods: {
        getApi(type){
            axios.get(store.apiUrl, type, {
                params: store.apiParams
            })
            
           
            .then(res => {
                // console.log(res.data);
                store[type] = res.data.results;

                console.log('store.movie', store.movie);
                console.log('store.tv', store.tv);
            //     store.movie = res.data.results;
            //     console.log(store.movie);
            //     if(store.movie.length === 0){
            //         this.message = 'Film non trovato'
            //     }
            })
            .catch(err => {
                console.log(err);
            })
        },
        startSearch(){
            this.getApi('movie')
            this.getApi('tv')
        }
    },
    mounted(){
        
    }
}
</script>

<template>
  <Header @startSearch="startSearch" />
  <MainContainer v-if="store.movie.length > 0" title="Film" type="movie"/>
  <MainContainer v-if="store.tv.length > 0" title="Serie TV" type="tv"/>
  <!-- <MainContainer v-if="store.movie.length > 0" />
    <div v-else class="container my-5">

        <h3 >{{ message }}</h3>
        
    </div> -->
</template>

<style lang="scss">
    @use './scss/vars' as *;
    @use './scss/general' as *;

    body {
        margin: 0;
        padding: 0;
    }

</style>