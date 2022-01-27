<template>
  <div>
      <div class="count">
        <h1>{{countcheck}}/{{todo.length}}</h1>
    </div>
    <div class="addtodolist">
        <input class="addtext" type="text" placeholder="입력해주세요" v-model="text" @keyup.enter="AddTodo">
        <button @click="AddTodo">등록</button>
    </div>

    <div class="btn">
        <button class="clean" @click="allDeletes">전체삭제</button>
        <select @change="selectChange">
            <option value="최신순">최신순</option>
            <option value="오레된순">오레된순</option>
        </select>
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
                <button @click="deletes(index)">삭제</button>
                <p class="record"></p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
let record = new Date()

export default {
data() {
        return{
            dayRecord: [record.getMonth()+1 +"/"+record.getDate() + "/"+record.getSeconds()],
            countcheck: 0,
            text:'',
            now:'',
            todo:[
                {id:1, checked:false, text:"아침에 조깅하기"},
                {id:2, checked:false, text:"저녁식사 요거트로 먹기"}
            ]
        }
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
        toggleCheckbox(index) {
            this.todo[index].checked = !this.todo[index].checked
            if(!this.todo[index].checked){
                this.countcheck--
            }else{
                this.countcheck++
            }
        },
        deletes(index){
           this.todo.splice(index, 1)
           if(this.todo.length<0){
            this.countcheck--
           }else if(this.countcheck!==0){
            this.countcheck--
           }
        },
        allDeletes(){
            this.todo.splice(0)
            this.countcheck=0
        },
        selectChange(e){
            console.log(e.target.value)
        }
    },
    computed: {
       
    }
}
</script>

<style>

</style>