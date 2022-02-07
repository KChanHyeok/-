<template>
  <div class="main_div">
    <Header/>
    <Index/>
    <Footer/>
  </div>
</template>

<script>

import Header from '../layouts/Header.vue'
import Footer from '../layouts/Footer.vue'
import Index from '../layouts/index.vue'


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