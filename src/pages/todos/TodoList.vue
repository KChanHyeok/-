<template>
  <div> 
    
    <div class="count"> 
        <h1>{{ checkcount }} / {{ todo.length }}</h1>
    </div>
    <!-- <form class="addtodolist"> -->
        <!-- <d-input v-model="text"></d-input> -->
    <!-- </form> -->
    <div class="btn">
      <d-button @click="goAddTodo">추가</d-button>
      <d-button @click="gofinished">내가완료한 리스트</d-button>
      <div>
        <d-button @click="deletesAll">전체삭제</d-button>
        <d-select @change="selectChange"></d-select>
      </div>
    </div>
    <div class="boxlist">
        <div class="list" v-for="(todos, index) in todo" :key="todos.id">
            <div>
                <input type="checkbox" @change="toggleCheckbox(index)" :checked="todo[index].checked">
            </div>
            <span
              :class="todo[index].checked ? 'text-muted' : ''"
              :style="todo[index].checked ? 'text-decoration:line-through' : ''"
            >
                {{ todos.text }}
            </span>
            <div>
              <d-button @click="deletes(index)">삭제</d-button>
              <d-button @click="finished(index)">완료</d-button>
              <router-link id="edit" to="" >수정</router-link>
              <p class="record">{{ todos.dayRecord }}</p>
            </div>
        </div>
    </div>
  
  </div>
</template>
<script>

import DButton from '@/components/Dbutton.vue'
import DSelect from '@/components/Dselect.vue'
// import DInput from '@/components/Dinput.vue'
import {mapGetters} from 'vuex'


export default {
  name: 'todo-list',
  components:{
      // DInput,
      DButton,
      DSelect,
      
  },
  data () {
    return {
      text:'',
    }
  },
  computed:{
      ...mapGetters(['todo', 'checkcount'])
  },
  methods: {
      toggleCheckbox(index) {  // checkbox 체크박스 클릭 인덱스 
        this.$store.dispatch('toggleCheckboxTodo', {index})
      },
      deletes(index) {  // 삭제 버튼 클릭 인덱스
        this.$store.dispatch('deleteTodo', {index})
      },
      deletesAll() {   //전체 삭제
        this.$store.dispatch('allDelete')
      },
      selectChange(e) {  //정렬 선택 e 선택한 이벤트 값 불러오기
        this.$store.dispatch('changeSelect', e)
      },
      finished(index){
        this.$store.dispatch('finishedTodo', {index})
      },
      goAddTodo(){
        this.$router.push('/todocreate')
      },
      gofinished(){
        this.$router.push('/todofinishedlist')
      }

  }
}

</script>

<style>

</style>