<template>
    <div>
        <h1>{{title}}</h1>
    </div>
    <div>{{htmlString}}</div>
    <div v-html="htmlString"></div>
</template>
<script>
export default {
    
    data() {
        return {
            title:'안녕하세요!',
            htmlString: '<p style="color:red;">This is a red string</p>'
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