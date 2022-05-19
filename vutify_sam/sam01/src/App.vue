<template>
<div>
  <h1>{{title}}</h1>
  <p>{{count}}</p>
  <v-btn @click="count++">추가</v-btn>
  <HomeComponent></HomeComponent>
</div>
</template>

<script>
import HomeComponent from './HomeCome.vue'
export default{
  components:{
    HomeComponent
  },
  data(){
    return{
      title:'안녕하세요',
      count:1
    }
  }
}
</script>
