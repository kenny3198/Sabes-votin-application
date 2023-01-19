 <template>
  <div class="background-portal">
    <form  class="form-login" @submit.prevent="handleSubmit">
    <div class="login-group">
      <input class="login-input" type="text" v-model="name" placeholder="Enter your Matric Number" required>
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
        
        }
    
    },
    methods: {
    handleSubmit() {
      if (this.name.includes("/") && this.name.includes("EA") && this.name.length === 14) {
    return this.$router.push({name:"categoryPage"})
      } else {
        alert("invalid MatricNumber")
      }
       
    }
}
}

</script>

<style lang="scss" scoped>
.background-portal{
  background: black;
  height: 100vh;
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
    border: 3px solid gold;
    border-radius: 15px;
    box-shadow: 0 0 12 15px;

}
.login-submit {
 width: 200px;
 padding: 20px;
 background: black;
margin-bottom: 20px;
 font-size: 100%;
 color: #fff;
 border-radius: 10px;
 border: 2px solid gold;
 cursor: pointer;

}
.login-submit:hover{
  background: #fff;
  color: black;
}

@media screen and (max-width: 600px) {
    .login-submit{
        width: 200px;
        // height: 56px;
        margin:  auto;
    }
}
</style>