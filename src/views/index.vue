<template>
  <div>
      <div class="count">
        <h1>{{countcheck}}/{{todo.length}}</h1>
    </div>
    <div class="addtodolist">
        <input class="addtext" type="text" placeholder="입력해주세요" v-model="text" @keyup.enter="AddTodo">
        <dButton @click="AddTodo">입력</dButton>
    </div>

    <div class="btn">
        <dButton class="clean" @click="allDeletes">전체삭제</dButton>
        <dSelect @change="selectChange"/>
    </div>

    <div class="boxlist">
        <div class="list" v-for="(todos, index) in todo" :key="todos.id">
            <div>
                <input type="checkbox" @change="toggleCheckbox(index)">
            </div>

            <span
                :class="todo[index].checked ? 'text-muted' : '' "
                :style="todo[index].checked ? 'text-decoration:line-through' : '' ">
                {{todos.text}}
            </span>

            <div>
                <dButton @click="deletes(index)">삭제</dButton>
                <p class="record">{{todos.dayRecord}}</p>
            </div>
        </div>
    </div>
  </div>
</template>
<script>

import dButton from '../components/Dbutton.vue'
import dSelect from '../components/Dselect.vue'

const moment  = require('moment');
const today = moment().format('MM-DD')

export default {

    components:{
        dButton,
        dSelect
    },
    data() {
        return{
            dayRecord:[],
            result:'',
            countcheck: 0,
            text:'',
            now:'',
            todos:[],
            todo: JSON.parse(localStorage.getItem('todos')) || 'todo',
            record: today
        }
    },
    methods: {
        AddTodo() {
            if(this.text){
            this.todo.push({
                id:Math.random(),
                checked:false,
                text: this.text,
                dayRecord: today
            })
            this.text=''
            localStorage.setItem('todos',JSON.stringify(this.todo))
        }
        },
        toggleCheckbox(index) {
            this.todo[index].checked = !this.todo[index].checked
            localStorage.setItem('todos',JSON.stringify(this.todo))
            if(!this.todo[index].checked){
                this.countcheck--
            }else{
                this.countcheck++
            }
        },
        deletes(index){
           this.todo.splice(index, 1)
           localStorage.setItem('todos',JSON.stringify(this.todo))
           if(this.todo.length<0){
            this.countcheck--
           }else if(this.countcheck!==0){
            this.countcheck--
           }
        },
        allDeletes(){
            this.todo.splice(0)
            localStorage.setItem('todos',JSON.stringify(this.todo))
            this.countcheck=0
        },
        selectChange(e){
            console.log(e.target.value)
        }
    },
    beforeMount(){
        localStorage.setItem('todos',JSON.stringify(this.todo)) 
    }
}
</script>

<style>

</style>