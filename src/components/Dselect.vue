<template>
  <div>
    <select @change="onchange" :value='sorted'>
            <option value="최신순">최신순</option>
            <option value="오래된순">오래된순</option>
    </select>
  </div>
</template>

<script>
export default {
  name:'DSelect',
  data(){
    return{
      sorted:''
    }
  },
methods:{
    onchange(e){
        this.$emit('change',e)
    }
},
beforeMount(){
  this.sorted=JSON.parse(localStorage.getItem('sort')) || '최신순'
}
}
</script>

<style>

</style>