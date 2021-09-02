<template>
  <div>
    <v-card class="d-flex justify-center mb-6" flat tile>
      <v-card class="pa-2 elevation-0" tile>
        <v-img
          src="../assets/productos-de-entrega-inmediata.9ad72bec.jpg"
        ></v-img>
      </v-card>
    </v-card>
    <v-card class="d-flex justify-center mb-6" flat tile>
      <v-card class="pa-2 elevation-0" tile>
        <v-carousel class="mt-3" height="200" hide-delimiter-background>
          <v-carousel-item
            class="d-flex justify-center"
            max-width="400"
            v-for="category in categories"
            :key="category.id"
          >
            <v-card class="elevation-0">
              <v-img :src="category.image"></v-img>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-card>
    <v-container id="sessions">
      <div v-for="(session, i) in sessions" :key="i">
        <Session :session="session"></Session>
      </div>
    </v-container>
    <v-container>
      <Lines :lines="lines"></Lines>
    </v-container>
  </div>
</template>
<script>
import Session from "../components/Session.vue";
import categories from "../categories.js";
import Lines from "../components/Lines.vue";

export default {
  components: {
    Session,
    Lines,
  },
  data() {
    return {
      sessions: {},
      categories: categories,
      lines: []
    };
  },
  mounted() {
    this.getSesion();
    this.getLinesCategories();
  },
  methods: {
    getSesion() {
      this.$.get("categories/sections").then((res) => {
        this.sessions = res.data;
      });
    },
    getLinesCategories() {
      this.$.get("categories").then((res) => {
        this.lines = res.data;
      });
    },
  },
};
</script>
https://v3.tissini.app/api/v3/categories
