<template>
  <div class="background-portal">
     <h1 class="title-page">SABES NOMINEES</h1>
    <form  class="form-login" @submit.prevent="handleSubmit">
    <div class="login-group">
      <input class="login-input" type="text" v-model="name" placeholder="Enter your Matric Number" required>
        </div>
        
        <div class="password-group">
            <!-- <input type="text" v-model="password" placeholder="Enter your pssword" required> -->
        </div>
       <div class="btn-group">
        <button class="login-submit">Submit</button>
       </div>
    </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name : "",
            password: ""
        }
    },
    methods: {
   async handleSubmit() {
    try {
    if(this.name.includes("NOTACESS") && this.name.length > 13 ) {
        return this.$router.push({name: "categoryPage"})
    }

    else{
    alert("Nomination is over")
    }

    } catch (error) {
        console.log(error)
    } 
}
}
}

</script>

<style lang="scss" scoped>

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