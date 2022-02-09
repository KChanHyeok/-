<template>
<div>
  <Header/>
  <router-view></router-view>
  <Footer/>
</div>
</template>

<script>
import Footer from '@/layouts/Footer.vue'
import Header from '@/layouts/Header.vue'

export default {
  name: 'todo-router',
  components:{
    Footer,
    Header
  }
}
</script>

<style>

</style>