import Vue from 'vue'
import Vuex from 'vuex'

const moment  = require('moment');
const today = moment().format('MM-DD-hh-mm-ss')

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced:true,
    state:{
        dayRecord:[],
            result:'',
            countcheck: 0,
            text:'',
            now:'',
            todo: [] ,
            todos: [],
            record: today,
            test: []
    },
    mutations:{
        ADD_TODO(state,value){
            state.todo.push ({
                id:Math.random (),
                checked:false,
                text: value,
                dayRecord: today
            })
            localStorage.setItem('todos', JSON.stringify(state.todo)) 
        },
        DELETE(state,value){
            if (state.countcheck>0 && state.todo[value].checked){ //체크카운트가 0이 아닌이상 제거시 같이 감소 
                state.countcheck--
                localStorage.setItem('checkcount', JSON.stringify(state.countcheck))  // 변경된 체크 카운트 값 저장
            }
            state.todo.splice(value, 1)
            localStorage.setItem('todos', JSON.stringify(state.todo))  // 변경된 배열 저장
        }
    },
    actions:{
        addTodo({commit},value){
            commit('ADD_TODO',value);
        },
        delete({commit},value){
            commit('DELETE',value)
        }
    },
    getters:{
        
    },
})