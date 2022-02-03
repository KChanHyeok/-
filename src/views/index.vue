<template>
  <div>
      <div class="count">
        <h1>{{countcheck}}/{{todo.length}}</h1>
    </div>
    <form class="addtodolist">
        <input class="addtext" type="text" placeholder="입력해주세요" v-model="text" @keyup.enter="AddTodo">
        <dButton @click="AddTodo">입력</dButton>
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
const today = moment().format('MM-DD-hh-mm-ss')

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
            todo: [],
            record: today,
            test: []
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
                    localStorage.setItem('checkcount',JSON.stringify(this.countcheck))
                }else{
                    this.countcheck++
                    localStorage.setItem('checkcount',JSON.stringify(this.countcheck))
                }
        },
        deletes(index){
           this.todo.splice(index, 1)
           localStorage.setItem('todos',JSON.stringify(this.todo))
            if(this.todo.length<0){
                this.countcheck--
                localStorage.setItem('checkcount',JSON.stringify(this.countcheck))
            }else if(this.countcheck!==0){
                this.countcheck--
                localStorage.setItem('checkcount',JSON.stringify(this.countcheck))
            }
        },
        allDeletes(){
            this.todo.splice(0)
            localStorage.setItem('todos',JSON.stringify(this.todo))
            this.countcheck=0
            localStorage.setItem('checkcount',JSON.stringify(this.countcheck))
        },
        selectChange(e){
        console.log(e.target.value)
        if(e.target.value==='최신순'){
            localStorage.setItem('sort',JSON.stringify(e.target.value))
            this.todo.sort(function(a,b){
                return a.dayRecord > b.dayRecord ? -1 : a.dayRecord < b.dayRecord ? 1 : 0;
            })
            localStorage.setItem('todos',JSON.stringify(this.todo))
        }else{
            localStorage.setItem('sort',JSON.stringify(e.target.value))
            this.todo.sort(function(a,b){
                return a.dayRecord < b.dayRecord ? -1 : a.dayRecord > b.dayRecord ? 1 : 0;
        })
            localStorage.setItem('todos',JSON.stringify(this.todo))
        }
        }
    },
    beforeMount(){
        this.todo=JSON.parse(localStorage.getItem('todos')) || [] 
        this.countcheck=JSON.parse(localStorage.getItem('checkcount')) || 0
        localStorage.setItem('todos',JSON.stringify(this.todo))
    }
}
</script>

<style>

</style>