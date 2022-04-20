<template>
  <h1>안녕</h1>
  <div>
    <input type="text" v-model="vm"> <br>
    <input type="number" v-model="nm"> <br>
    <textarea id="" cols="30" rows="10" v-model="message"></textarea>
  </div>
</template>
<script>
export default {
  
  data() {
    return {
      vm: '대한민국',
      nm: 1045,
      message : '여러 줄을 입력할 수 있는 공간입니다.'
  }
},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {}
}
</script>