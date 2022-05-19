<template>
  <h1>{{title}}</h1>
  <p>{{count}}</p>
  <v-btn @click="count++">추가</v-btn>
</template>

<script>
export default{
  data(){
    return{
      title:'안녕하세요',
      count:1
    }
  }
}
</script>
