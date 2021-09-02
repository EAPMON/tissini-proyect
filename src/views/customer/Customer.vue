<template>
  <div>
    <div>
      <v-app-bar app color="grey lighten-3">
        <div class="d-flex align-center">
          <h3 class="pink--text headline">{{ customer.store_name }}</h3>
        </div>

        <v-spacer></v-spacer>

        <v-btn href="tel:786-547-0213" text>
          <v-icon>mdi-phone</v-icon>
        </v-btn>
        <v-btn @click="confirmLogout = true" text>
          <v-icon>mdi-exit-to-app</v-icon>
        </v-btn>
      </v-app-bar>
    </div>

    <router-view />
    <v-footer fixed>
      <v-bottom-navigation color="#ec529c" grow absolute>
        <router-link to="/categories" tag="v-btn">
          <v-btn>
            <span>Categorías</span>
            <v-icon>mdi-home</v-icon>
          </v-btn>
        </router-link>

        <router-link to="#"  tag="v-btn">
          <v-btn>
            <span>Catálogos</span>
            <v-icon>mdi-badge-account</v-icon>
          </v-btn>
        </router-link>

        <router-link to="/shoppingcar" tag="v-btn">
          <v-btn>
            <span>Carrito</span>
            <v-icon>mdi-cart-outline</v-icon>
          </v-btn>
        </router-link>
      </v-bottom-navigation>
    </v-footer>
    <v-dialog v-model="confirmLogout" max-width="500px">
      <v-card>
        <v-toolbar color="pink" dark> ¿Quieres Salir? </v-toolbar>
        <v-card-text class="d-flex align-start mt-5">
          Dándole un toque a este botón sales de la Tienda. Si quieres navegar
          en la Tienda utiliza las opciones de la parte inferior:
        </v-card-text>
        <v-card-text class="d-flex align-start">
          <v-icon color="pink">mdi-home</v-icon> <span>Home</span>
          <v-icon class="ml-3" color="pink">mdi-badge-account</v-icon
          ><span>Catalogo</span>
          <v-icon class="ml-3" color="pink">mdi-cart-outline</v-icon
          ><span>Carrito</span>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="pink--text" text @click="logout()">
            Salir de la tienda
          </v-btn>
          <v-btn class="pink--text" text @click="confirmLogout = false">
            Volver
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data: () => ({
    confirmLogout: false,
  }),
  methods: {
    logout() {
      localStorage.removeItem("customer");
      this.$router.push("/login");
    },
  },
  computed: {
    customer: {
      get() {
        return this.$store.getters["getCustomer"];
      },
    },
  },
};
</script>
