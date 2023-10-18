<script>

import { store } from '../data/store'
import MovieCard from './partials/MovieCard.vue';

export default {
    name: 'MainContainer',
    props:{
        title: String,
        type: String,
    },
    components: {
        MovieCard
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>
  
    <div class="container my-5">
        <h1>{{ title }}</h1>
        <div class="row row-cols-4">

            <MovieCard v-for="item in store[type]" :key="item.id" class="card m-1" :item="item" />

        </div>
    </div>


</template>

<style lang="scss">
    @use '../scss/vars' as *;

</style>