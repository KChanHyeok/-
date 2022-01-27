<template>
  <div class="main_div">
    <Header/>
    <Index/>
    <Footer/>
  </div>
</template>

<script>

import Header from '../views/Header.vue'
import Footer from '../views/Footer.vue'
import Index from '../views/index.vue'


export default {
    components: {
        Header,
        Footer,
        Index
    }
    
}
</script>

<style>
    
</style>