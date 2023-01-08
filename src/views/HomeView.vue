<template>
  <div class="home">
   <marquee behavior="scroll" direction="left"> <h1>SABES NOMINATION PORTAL</h1></marquee>
    <p>PICK YOUR NOMINESS AND LET US KNOW </p>
    <router-link :to="{name: 'loginPage'}">CLICK HERE TO LOGING</router-link>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  
  }
}
</script>
<style scoped>
  .home{
    background-image: url("../assets/enginerring.jpg");
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    overflow-x: hidden;
    position: fixed;
    top: 0;
    left: 0;
  }
  h1 {
    color:green;
  }
  p{
    color: #fff;
    font-size: 2rem;
  }
  a {
    font-size: 2rem;
    color: #fff;
  }
</style>
