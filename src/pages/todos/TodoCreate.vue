<template>
  <div>
    <div class="count">
      아래에 입력하여 추가해주세요
    </div>
    <div class="addtodolist">
    <d-input v-model="text"></d-input>
    <d-button @click="addTodo">입력</d-button>
    </div>
  </div>
</template>

<script>
import DInput from '@/components/Dinput.vue'
import DButton from '@/components/Dbutton.vue'
import {mapGetters} from 'vuex'

export default {
  components:{
    DInput,
    DButton
  },
  computed:{
    ...mapGetters['todo'],
    
  },  
  data(){
    return{
      text:'',
    }
  },
  methods:{
    addTodo(e) {
        if(this.text){
          this.$store.dispatch('addTodo', this.text)
          this.text=''
        }
        this.$router.go(-1)
        },
  }
}
</script>

<style>
.finish{
  margin-top: 50px;
  display: flex;
  justify-content: right;
}
</style>