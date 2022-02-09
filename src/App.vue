<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: 'App',
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
    #edit {
      font-size: 8px;
      text-decoration : none;
      color: black;
      
    }
  .addtodolist{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 0px;
        width: 250px;
        height: 25px;
        border: 1px solid black;
    }
    .addtodolist button{
      padding: 4.7px;
    }
    .addtext{
        border:0 solid black;
        padding: 8px 13px;
    }
    .boxlist {
      height: 200px;
      overflow: auto;
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
      float: left;
    }
    .list p {
      margin-right: 5px;
      float: left;
    }

    .boxlist{
        margin-top: 10px;
        width: 250px;
        border: 2px solid black;
    }
    .clean {
        margin-top: 10px;
    }
    .timer {
      float: right;
    }
    .main_div {
      width: 255px;
    }
    .count {
      display: flex;
      margin-bottom: 10px;
      margin-top: 110px;
    }
    .record {
      font-size: 11px;
    }
    .btn {
      margin-top: 10px;
      display: flex;
      flex-flow: row;
      justify-items: center;
    }
    
</style>
