<template>
  <div class="home">
    <v-container fluid class="d-flex align-center mb-6">
      <v-row align="center" justify="center" dense>
        <v-col cols="6">
          <v-card outlined color="transparent">
            <v-img
              src="../assets/logo-tissini.png"
              alt="tissini_logo"
              contain
              height="250"
            ></v-img>
            <v-card-text class="white--text ">
              <v-col>
                <h3 class="subtitle-1">
                  Ingresa el número de teléfono de tu asesora independiente.
                </h3>
              </v-col>
            </v-card-text>
            <v-card-actions>
              <v-text-field
                @keypress="isNumber($event)"
                maxlength="10"
                label="Teléfono"
                v-model="credentials.mobilephone"
                prepend-inner-icon="mdi-phone"
                class="rounded-0"
                outlined
                color="white"
                @keyup="getCustomerAndCategories($event.target.value)"
              ></v-text-field>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    credentials: {
      mobilephone: "",
    },
  }),
  mounted() {},
  methods: {
    async getCustomerAndCategories(value) {
      if (value.length == 10) {
        try {
          let res = await this.$.post("login/client", this.credentials);
          this.$store.commit("setCustomer", res.data.customer);
          localStorage.setItem("customer", JSON.stringify(res.data.customer));
          this.$router.push("/categories");
        } catch (error) {
          alert(error);
        }
      }
    },
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    }
  },
  computed: {
    isLogin: {
      get() {
        return this.$store.getters["getCustomerLogin"];
      },
    },
  },
};
</script>
<style scoped>
.home {
  height: 100vh;
  background-image: url("../assets/login-desktop.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

img {
  width: 250px;
}

.input {
  width: 100hv;
}
</style>
