import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moment  = require('moment')
const today = moment().format('MM-DD-hh-mm-ss')

const types= {

    ADD_TODO: 'ADD_TODO',
    DELETE_TODO: 'DELETE_TODO',
    DELETE_ALL_TODO: 'DELETE_ALL_TODO',
    TOGGLE_CHECKBOX_TODO: 'TOGGLE_CHECKBOX_TODO',
    SELECT_CHANGE_TODO: 'SELECT_CHANGE_TODO',

}
export default new Vuex.Store({
    namespaced: true,  // 모듈이 독립적이거나 재사용되기를 원할때 
    state(){
        return{
            dayRecord:[],
            result:'',
            countcheck: JSON.parse(localStorage.getItem('checkcount')) || 0,
            text:'',
            now:'',
            todo: JSON.parse(localStorage.getItem('todos')) || [],
            todos: [],
            record: today,
        }
    },

    getters:{
        todo(state) {
            return state.todo
        },
        countcheck(state) {
            return state.countcheck
        }
    },

    mutations:{
        [types.ADD_TODO](state, payload) {
            state.todo.push ({
                id:Math.random (),
                checked:false,
                text: payload,
                dayRecord: today
            })
            localStorage.setItem('todos', JSON.stringify(state.todo))
        },
        [types.DELETE_TODO](state, payload) {
            if (state.countcheck>0 && state.todo[payload].checked){ //체크카운트가 0이 아닌이상 제거시 같이 감소 
                state.countcheck--
                localStorage.setItem('checkcount', JSON.stringify(state.countcheck))  // 변경된 체크 카운트 값 저장
            }
            state.todo.splice(payload, 1)
            localStorage.setItem('todos', JSON.stringify(state.todo))  // 변경된 배열 저장
        },
        [types.TOGGLE_CHECKBOX_TODO](state, payload) {
            state.todo[payload].checked = !state.todo[payload].checked  //체크 박스 클릭시 반복 클릭시 true에서 false / false 에서 true 로 
            localStorage.setItem('todos', JSON.stringify(state.todo))  // 체크 박스 상태 변화 저장
                if (!state.todo[payload].checked) { //만약 선택한 인덱스의 체크 박스가 false일때
                    state.countcheck--  //list의 체크 횟수 차감
                    localStorage.setItem('checkcount', JSON.stringify(state.countcheck))  //변경된 체크 카운트 저장
                } else {
                    state.countcheck++ //list의 체크 횟수 추가
                    localStorage.setItem('checkcount', JSON.stringify(state.countcheck)) //변경된 체크 카운트 저장
                }
        },
        [types.SELECT_CHANGE_TODO](state,payload) {
            if(payload === '최신순') {
                localStorage.setItem('sort', JSON.stringify(payload))
                state.todo.sort(function(a,b) {
                    return a.dayRecord > b.dayRecord ? -1 : a.dayRecord < b.dayRecord ? 1 : 0  //최신순으로 정렬
                })
                localStorage.setItem('todos', JSON.stringify(state.todo))
            } else {
                localStorage.setItem('sort', JSON.stringify(payload))
                state.todo.sort(function(a,b) {
                    return a.dayRecord < b.dayRecord ? -1 : a.dayRecord > b.dayRecord ? 1 : 0 //오래된순으로 정렬
            })
                localStorage.setItem('todos', JSON.stringify(state.todo))
            }
        },
        [types.DELETE_ALL_TODO](state){
            state.todo.splice(0) 
            state.countcheck=0
            localStorage.setItem('todos', JSON.stringify(state.todo))  // 변경된 삭제 리스트 저장
            localStorage.setItem('checkcount', JSON.stringify(state.countcheck))  // 변경된 체크 카운트 저장
        }
    },
    actions:{
        addTodo({commit}, payload) {
            commit(types.ADD_TODO, payload)
        },
        deleteTodo({commit}, payload) {
            commit(types.DELETE_TODO, payload.index)
        },
        toggleCheckboxTodo({commit}, payload) {
            commit(types.TOGGLE_CHECKBOX_TODO, payload.index)
        },
        selectChange({commit}, payload) {
            commit(types.SELECT_CHANGE_TODO, payload.target.value)
        },
        allDelete({commit}) {
            commit(types.DELETE_ALL_TODO)
        }
    },
})