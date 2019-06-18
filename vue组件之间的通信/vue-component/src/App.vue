<template>
  <div>
    <button @click="show=true">登录</button>
    <modal 
      v-show="show" 
      title="自定义title" 
      ok-value="好" 
      :app-show.sync="show"
    ></modal>
  </div>
</template>
<script>
import Modal from './components/modal'
export default {
  name:'app',
  data() {
    return {
      show:false
    }
  },
  components:{
    Modal
  },
  methods: {
    // clickHandle(){
    //   // alert(1)
    //   this.show = false
    // }
  },
}
</script>

