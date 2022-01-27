<template>
  <div id="app">
    <Todolist/>
  </div>
</template>

<script>
import Todolist from './components/Todolist.vue'

export default {
  name: 'App',
  components: {
    Todolist
  }
}
</script>

<style>
  *{
    margin: 0;
    }
    #app{
      display: flex;
      justify-content: center;
    }
  .addtodolist{
        display: flex;
        justify-content: space-between;
        margin-top: 150px;
        padding: 4px 0px;
        width: 250px;
        height: 25px;
        border: 1px solid black;
    }
    .addtodolist button{
      margin-right: 5px;
    }
    .addtext{
        border:0 solid black;
        padding: 12px 13px;
    }
    .list {
        margin: 8px 0px;
        margin-left: 4px;
        display: flex;
        
        justify-content: space-between;
    }
    .list input, .list span {
        padding-left: 5px;
    }
    .list button {
        margin-right: 5px;
    }
    .boxlist{
        margin-top: 10px;
        width: 250px;
        border: 2px solid black;
    }
    .clean {
        margin-top: 10px;
    }
</style>
