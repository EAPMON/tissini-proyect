<template>
  <div class="home">
    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <img class="logo img-fluid"  alt="Vue logo" src="../assets/logo-tissini.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },

  mounted (){
      let credentials = {
                    "mobilephone": "7865470213."
                }
        this.$.post('login/client', credentials)
        .then(res => {
            console.log(res.data);
        })
  }
}
</script>
<style scoped>

.home{
  display: flex;
  align-items: center;
  justify-content: center;
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
