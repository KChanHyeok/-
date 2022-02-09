<template>
  <div>
      <button @click="onclick"><slot></slot></button>
  </div>
</template>

<script>
export default {
  name:'DButton',
  methods:{
    onclick(e){
      this.$emit('click', e)
    }
  }
}
</script>

<style>

</style>