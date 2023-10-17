<script>

import { store } from '../data/store'

export default {
    name: 'MainContainer',
    data(){
        return{
            store
        }
    }
}
</script>

<template>
  
    <div class="container my-5">
        <h1>Film</h1>
        <div class="row row-cols-4">

            <div v-for="item in store.movie" :key="item.id" class="card m-1">
                <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <h6 class="card-title">{{ item.original_title }}</h6>
                    <p class="card-text">{{ item.description     }}</p>
                    <a href="" class="btn btn-primary">Go</a>
                </div>
            </div>

        </div>
    </div>


</template>

<style lang="scss">
    @use '../scss/vars' as *;

</style>