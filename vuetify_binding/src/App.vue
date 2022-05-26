<template>
  <v-card>
    <HeaderComponent></HeaderComponent>
    <v-navigation-drawer app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            할일 정하기
          </v-list-item-title>
          <v-list-item-subtitle>
            vuetify2-sys
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
    <FooterComponent></FooterComponent>
  </v-card>
</template>
<script>
import HeaderComponent from './HeaderCom.vue'
import FooterComponent from './FooterCom.vue'
export default {
  components: {
    HeaderComponent,
    FooterComponent
  },
  data () {
    return {
      items: [
        { title: 'ToDo', icon: 'mdi-checkbox-marked-circle-plus-outline', to: '/' },
        { title: 'About', icon: 'mdi-help-box', to: '/about' }
      ],
      right: null
    }
  }
}
</script>
