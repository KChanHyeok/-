<template>
  <div class="timer">
      <h3>{{now}}</h3>
  </div>
</template>

<script>
let today = new Date()
let weekday = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]

export default {
    name:'hedaer-todo',
    data() {
        return {
            now: today.getMonth()+1 + "/" + today.getDate() +" " + weekday[today.getDay()-1]
        }
    }
}
</script>

<style>

</style>