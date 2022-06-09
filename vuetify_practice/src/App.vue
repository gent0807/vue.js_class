<template>
<div>
  <HeaderComponent></HeaderComponent>
  <h1>{{title}}</h1>
  <p>{{count}}</p>
  <v-btn @click="count++">추가</v-btn>
  <FooterComponent></FooterComponent>
</div>
</template>

<script>
import HeaderComponent from './HeaderCom.vue'
import FooterComponent from './FooterCom.vue'
export default{
  components:{
    HeaderComponent,
    FooterComponent
  },
  data(){
    return{
      title:'안녕하세요',
      count:1
    }
  }
}
</script>
