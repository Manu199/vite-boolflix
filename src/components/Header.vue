<script>

import { store } from '../data/store'

export default {
    name: 'Header',
    data(){
        return{
            store
        }
    }
}
</script>


<template>
  
<header>
    <div class="logo">
        <img src="/logo-boolflix.png" alt="">
    </div>
    <div class="search">
        
        <input @keyup.enter="$emit('startSearch')" v-model.trim="store.apiParams.query" type="text" placeholder="Cerca un film" class="form-control">
        <button @click="$emit('startSearch')" class="invio-ricerca">Search</button>

        <select class="form-select ms-3">
            <option value="">All</option>
            <option value="movie">Film</option>
            <option value="tv">Serie Tv</option>
        </select>
    </div>
</header>

</template>


<style scoped lang="scss">

    @use '../scss/vars' as *;

    header {
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: space-between;
        background-color: black;
        align-items: center;
    }
    .logo img{
        width: 150px;
        margin-left: 20px;
    }

    .search {
        margin-right: 20px;
        display: flex;
        justify-content: center;
        align-content: center;

        button {
            padding: 5px 10px;
            background-color: red;
            border: 1px solid black;
            color: white;
            border-radius: 0 3px 3px 0;
            margin-right: 15px;
        }
        input {
         border: 1px solid black;
         border-radius:  3px 0px 0px 3px;

         &:focus {
            background-color: beige;
            border: 0px;
         }
        }
    }

</style>