<script>
export default {

}
</script>


<template>
  
<header>
    <div class="logo">
        <img src="/public/logo-boolflix.png" alt="">
    </div>
    <div class="search">
        <input type="text">
        <button class="invio-ricerca">Search</button>
    </div>
</header>

</template>


<style scoped lang="scss">

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