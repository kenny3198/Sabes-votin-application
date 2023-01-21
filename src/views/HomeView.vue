<template>
<div class="homePage"> 
  <MARquee>
    <h1>SOCIETY OF AGRICULTURE AND BIORESOURCES ENGINEERING DEPARTMENT.</h1>
   </MARquee>
   <div class="login-page">
     <router-link class="login" :to="{name: 'loginPage'}">LOGIN IN</router-link>
   </div>
</div>
  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.homePage {
  background: black;
  height: 100vh;
}
h1{
    color: gold;
}
.login-page{
  display: flex;
  justify-content: center;
}
.login {
    color: white;
    text-decoration: none;
  }
</style>