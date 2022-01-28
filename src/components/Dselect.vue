<template>
  <div>
    <select @change="onchange">
            <option value="최신순">최신순</option>
            <option value="오래된순">오레된순</option>
    </select>
  </div>
</template>

<script>
export default {
methods:{
    onchange(e){
        this.$emit('change',e)
    }
}
}
</script>

<style>

</style>