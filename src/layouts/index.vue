<template>
  <div> 
    <div class="count"> 
        <h1>{{countcheck}} / {{todo.length}}</h1>
    </div>
    <form class="addtodolist">
        <!-- <input class="addtext" type="text" placeholder="입력해주세요" v-model="text" @keyup.enter="AddTodo"> -->
        <dInput v-model="text" />
        <dButton @click="addTodo">입력</dButton>
    </form>

    <div class="btn">
        <dButton class="clean" @click="allDeletes">전체삭제</dButton>
        <dSelect @change="selectChange"/>
    </div>

    <div class="boxlist">
        <div class="list" v-for="(todos, index) in todo" :key="todos.id">
            <div>
                <input type="checkbox" @change="toggleCheckbox(index)" :checked="todo[index].checked">
            </div>

            <span
                :class="todo[index].checked ? 'text-muted' : ''"
                :style="todo[index].checked ? 'text-decoration:line-through' : ''">
                {{ todos.text }}
            </span>

            <div>
                <dButton @click="deletes(index)">삭제</dButton>
                <p class="record">{{ todos.dayRecord }}</p>
            </div>
        </div>
    </div>
  </div>
</template>
<script>

import dButton from '../components/Dbutton.vue'
import dSelect from '../components/Dselect.vue'
import dInput from '../components/Dinput.vue'
import {mapGetters} from 'vuex'

export default {

    components:{
        dInput,
        dButton,
        dSelect
    },
    data() {
        return{
            dayRecord:[],
            result:'',
            text:'',
            now:''
        }
    },
    computed:{
        ...mapGetters(['todo','countcheck'])
        // todo() {
        //     return this.$store.state.todo;
        // },
        // countcheck(){
        //     return this.$store.state.countcheck
        // }
    },
    methods: {
        addTodo() {
            if(this.text){
            this.$store.dispatch('addTodo',this.text)
            console.log(this.text)
            this.text=''
            }
        },
        toggleCheckbox(index) {  // checkbox 체크박스 클릭 인덱스 
            this.$store.dispatch('toggleCheckboxTodo', {index})
            // this.todo[index].checked = !this.todo[index].checked  //체크 박스 클릭시 반복 클릭시 true에서 false / false 에서 true 로 
            // localStorage.setItem('todos', JSON.stringify(this.todo))  // 체크 박스 상태 변화 저장
            //     if (!this.todo[index].checked) { //만약 선택한 인덱스의 체크 박스가 false일때
            //         this.countcheck--  //list의 체크 횟수 차감
            //         localStorage.setItem('checkcount', JSON.stringify(this.countcheck))  //변경된 체크 카운트 저장
            //     } else {
            //         this.countcheck++ //list의 체크 횟수 추가
            //         localStorage.setItem('checkcount', JSON.stringify(this.countcheck)) //변경된 체크 카운트 저장
            //     }
        },
        deletes(index) {  // 삭제 버튼 클릭 인덱스
        this.$store.dispatch('deleteTodo', {index})
        // this.todo.splice(index, 1)  // 클릭한 인덱스 배열 삭제
            // if (this.countcheck>0 && this.todo[index].checked){ //체크카운트가 0이 아닌이상 제거시 같이 감소 
            //     this.countcheck--
            // localStorage.setItem('checkcount', JSON.stringify(this.countcheck))  // 변경된 체크 카운트 값 저장
            // }
        //    localStorage.setItem('todos', JSON.stringify(this.todo))  // 변경된 배열 저장
        },
        allDeletes() {   //전체 삭제
         this.$store.dispatch('allDelete')
            // this.todo.splice(0)  // list 전체 삭제
            // this.countcheck=0  //전체 삭제 체크카운터 0으로 초기화
            // localStorage.setItem('todos', JSON.stringify(this.todo))  // 변경된 삭제 리스트 저장
            // localStorage.setItem('checkcount', JSON.stringify(this.countcheck))  // 변경된 체크 카운트 저장
        },
        selectChange(e) {  //정렬 선택 e 선택한 이벤트 값 불러오기
        this.$store.dispatch('selectChange',e)
        //     if(e.target.value === '최신순') {  
        //         localStorage.setItem('sort', JSON.stringify(e.target.value))
        //         this.todo.sort(function(a,b) {
        //             return a.dayRecord > b.dayRecord ? -1 : a.dayRecord < b.dayRecord ? 1 : 0;  //최신순으로 정렬
        //         })
        //         localStorage.setItem('todos', JSON.stringify(this.todo))
        //     } else {
        //         localStorage.setItem('sort', JSON.stringify(e.target.value))
        //         this.todo.sort(function(a,b) {
        //             return a.dayRecord < b.dayRecord ? -1 : a.dayRecord > b.dayRecord ? 1 : 0; //오래된순으로 정렬
        //     })
        //         localStorage.setItem('todos', JSON.stringify(this.todo))
        //     }
        // }
    }
    },
    beforeMount() {
        localStorage.setItem('todos', JSON.stringify(this.todo))
    }
}

</script>

<style>

</style>