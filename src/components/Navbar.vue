<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
            <div class="container">
                <a class="navbar-brand" v-on:click="this.$router.push('/')" href="javascript:;">
                    <img src="../assets/medal.png" width="30" height="30" class="icon d-inline-block align-top logo" alt="">
                    E-SERTIFIKAT BONE-BOLANGO
                </a>
                <a class="navbar-brand" href="#"></a>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name:'Navbar',
}
</script>
<style scoped>

    .icon{
        border-color:rgb(228,71,64);
        border-style: solid;
        border-radius: 20px;
        background-color:rgb(228,71,64);
    }
    .navbar-brand{
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
    }
</style>