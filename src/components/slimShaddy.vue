<template>
    <section>
    <div class="level-face">
   <h1>SLIM SHADY </h1>
    </div>
    <h2 class="repeated">REPEATED VOTES DECREASE THE USERS VOTE BY -1</h2>
  <div class="container">
    <div class="first-input">
      <input v-model="output" type="radio" value="DUBS (300L)" name="gender" id="Mr A">
     <label for="Mr A"> DUBS (300L)</label>
    </div>
     <br>
    <div class="first-input">
   <input v-model="output" type="radio" value="AMINA (400L)" name="gender" id="MR B">
   <label for="MR B">AMINA (400L)</label>
   </div>
    <br>
   <div class="first-input">
    <input v-model="output" type="radio" value="LIZZY BEE" name="gender" id="MR C">
    <label for="MR C">LIZZY BEE</label>
    </div>
  <br>
  
  </div>
  <div class="btn-container">
     <button @click="voteSlimshady" class="btn">Vote</button>
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
 voteSlimshady() {
 if (this.output === "") {
  alert("choose a candidate")
 } else {
   let slimShadyVote = {
    output : this.output
  }
  this.output = ""
  votingFireStore.collection("slimShadyVote").add(slimShadyVote)
 }

 
},
results() {
  alert("This page is meant for the admin")
}
}
}
</script>

<style>

</style>