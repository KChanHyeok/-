<template>
  <input class="addtext" type="text" placeholder="입력해주세요" :value="value" @input="updateInput">
</template>

<script>
export default {
    props: ['value'],
    methods:{
      updateInput(e){
          this.$emit('input', e.target.value)
      }
    }
}
</script>

<style>

</style>