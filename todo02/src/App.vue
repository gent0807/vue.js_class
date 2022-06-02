<template>
  <v-card>
    <v-app-bar
      app
      color="#fcb69f"
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      prominent
    >
      <v-app-bar-nav-icon @click="drawer=!drawer" />
      <v-toolbar-title>정현이의 할일 모음</v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            할일 정하기
          </v-list-item-title>
          <v-list-item-subtitle>
            vuetify2-wjh
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

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
      <router-view />
    </v-main>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
        { title: 'Todo', icon: 'mdi-checkbox-marked-circle-plus-outline', to: '/' },
        { title: 'About', icon: 'mdi-help-box', to: '/about' },
        { title: 'Grid', icon:'mdi-application-export', to:'/gridsystem'}
      ],
      right: null
    }
  }
}
</script>
