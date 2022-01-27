<template>
  <div>
    <div class="header">
        <p></p>
    </div>
    <div class="addtodolist">
        <input class="addtext" type="text" placeholder="입력해주세요" v-model="text" @keyup.enter="AddTodo">
        <button @click="AddTodo">등록</button>
    </div>
    <button class="clean" @click="alldeletes">전체삭제</button>

    <div class="boxlist">
        <div class="list" v-for="(todos, index) in todo" :key="todos.id">
            <div>
            <input type="checkbox" @change="checkedbox(index)">
            </div>
            <span
                :class="todo[index].checked ? 'text-muted' : '' "
                :style="todo[index].checked ? 'text-decoration:line-through' : '' ">
                {{todos.text}}
            </span>
            <button @click="deletes(index)">삭제</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    components: {
    },
    data() {
        return{
            text:'',
            now:'',
            todo:[
                {id:1, checked:false, text:"아침에 조깅하기"},
                {id:2, checked:false, text:"저녁식사 요거트로 먹기"}
            ]
        }
    },
    computed : {
        // time: this.now = date.getMonth() + "/" + data.getda

    },
    methods: {
        AddTodo() {
            if(this.text){
            this.todo.push({
                id:Math.random(),
                checked:false,
                text: this.text
            })
            this.text=''
        }
        },
        checkedbox(index) {
            this.todo[index].checked = !this.todo[index].checked
        },
        deletes(index){
           this.todo.splice(index, 1)
        },
        alldeletes(){
            this.todo.splice(0)
        }
    }
}
</script>

<style>
    
</style>