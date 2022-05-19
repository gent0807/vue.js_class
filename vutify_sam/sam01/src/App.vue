<template>
<div>
  <h1>{{title}}</h1>
  <p>{{count}}</p>
  <v-btn @click="count++">추가</v-btn>
  <HomeComponent></HomeComponent>
  <FooterComponent></FooterComponent>
</div>
</template>

<script>
import HomeComponent from './HomeCome.vue'
import FooterComponent from './FooterCom.vue'
export default{
  components:{
    HomeComponent,
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
