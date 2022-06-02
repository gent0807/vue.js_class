<template>
  <v-card>
    <v-list>
      <v-list-item v-for="(할일,idx) in tasks" :key="idx">
        <template>
          <v-list-item-action>
            <v-checkbox :input-value="할일.done"></v-checkbox>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>{{할일.title}}</v-list-item-title>
          </v-list-item-content>
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'ToDo',
  data () {
    return {
      tasks: [
        { id: 1, title: '학교 가기', done: false },
        { id: 2, title: '수업 듣기', done: true },
        { id: 3, title: '과제 하기', done: false }
      ]
    }
  }
}
</script>
