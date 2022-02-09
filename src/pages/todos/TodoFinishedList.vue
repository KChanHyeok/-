<template>
  <div>
    <div class="clear">
    <p>내가 여태까지 완료한 일정</p>
    </div>
    <div class="boxlist">
        <div class="list" v-for="finishedtodos in finishedtodo" :key="finishedtodos.id">
            <span>
                {{ finishedtodos.text }} {{finishedtodos.dayRecord}}
            </span>
        </div>
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['finishedtodo'])
  }

}
</script>

<style>
.clear{
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>