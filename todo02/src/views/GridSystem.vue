<template>
  <v-container>
    <v-row>
      <v-col
        v-for="count in 12"
        :key="count"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card
          class="pa-3"
          outlined
        >
          오늘 수업은 여기까지
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
