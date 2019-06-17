<template>
  <div>
    <modal title="自定义title" ok-value="好" @ok-click="clickHandle"></modal>
  </div>
</template>
<script>
import Modal from './components/modal'
export default {
  name:'app',
  components:{
    Modal
  },
  methods: {
    clickHandle(){
      alert(1)
    }
  },
}
</script>

