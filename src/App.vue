<template>
  <div class="container">

  </div>
 <router-view/>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: black;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
form{
  display: flex;
  justify-content: center;
  align-items: center;  
  align-content: center;
  flex-direction: column;
}
input{
    width: 300px;
    padding: 20px;
    margin: 20px;
    font-size: 21px;
    margin-top: 30px;

}
.login-submit {
 width: 200px;
 padding: 20px;
margin-bottom: 20px;
 font-size: 100%;
 color: #000;

}

@media screen and (max-width: 600px) {
    .login-submit{
        width: 200px;
        // height: 56px;
        margin:  auto;
    }
}
</style>