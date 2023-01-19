<template>
    <section>
    <div class="level-face">
   <h1>MR  Eboney</h1>
    </div>
     <h2 class="repeated">REPEATED VOTES DECREASE THE USERS VOTE BY -1</h2>
  <div class="container">
    <div class="first-input">
      <input v-model="output" type="radio" value="IBRO (300L)" name="gender" id="Mr A">
     <label for="Mr A">IBRO (300L)</label>
    </div>
     <br>
    <div class="first-input">
   <input v-model="output" type="radio" value="SOCIAL BUTTERFLY (300L)" name="gender" id="MR B">
   <label for="MR B">SOCIAL BUTTERFLY (300L)</label>
   </div>
    <br>
   <div class="first-input">
    <input v-model="output" type="radio" value="AMEEN (400L)" name="gender" id="MR C">
    <label for="MR C">AMEEN (400L)</label>
    </div>
  <br>
  <div class="first-input">
     <input v-model="output" type="radio" value="JOSHIAH (500L)" name="gender" id="MR D">
     <label for="MR D">JOSIAH (500L)</label>
     </div>
     <br>
     <div class="first-input">
      <input v-model="output" type="radio" value="SHADDY (300L)" name="gender" id="MR E">
      <label for="MR E">SHADDY (300L)</label>
      </div>
       <!-- <p> hidden results {{ output }}</p> -->
  </div>
  <div class="btn-container">
     <button @click="voteEbony" class="btn">Vote</button>
    <button @click="results" class="btn">Results</button>
  </div>

   
    </section>
</template>

<script>
import { votingFireStore } from "@/firebase/config"
export default {
data() {
  return {
   output: null
  }
},
methods: {
voteEbony() {
if (this.output === "") {
    alert("choose a candiate")
} else {
      let ebonyVote = {
    output : this.output
  }
  this.output = ""
  votingFireStore.collection("ebonyVote").add(ebonyVote)
}
},
results() {
  alert("this page is meant for the admin")
}
}
}
</script>
<style lang="scss">
    .welcome {
   padding: 20px;
   margin-top: 0;
   text-align: center;
    }
    .repeated {
      text-align: center;
      color: white;
    }
.level-face h1{
    background: black;
    text-transform: uppercase;
    text-align: center;
    border-radius: 10px;
    width: 50%;
    margin: auto;
    padding: 30px;
    margin-bottom: 10px;
    font-size: 1.3rem;
    color: white;
    border: 2px solid gold;
}
section{
    width: 100%;
    height: 100vh;
    // background: black;
    
}
.first-input{
    background: black;
    color: white;
    padding: 10px;
    border: 2px solid gold;
}
label {
    font-size: 20px;
    // background: black;
    cursor: pointer;
    color: white;
}
input[type="radio"] {
    width: 16px;
    height: 16px;
    font-size: 60px;
    border: 2px solid #01cc65;
}
.btn-container{
    display: flex;
    justify-content: center;
    gap: 6px;
    margin: 10px;
}
.btn {
    padding: 20px;
    background:  black;
    color: white;
    border-radius: 15px;
    border: 2px solid  gold;
}
.btn:hover{
    background: blue;
    color: white;
}

</style>