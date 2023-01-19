<template>
    <section>
    <div class="level-face">
   <h1> COUPLE OF THE YEAR </h1>
    </div>
    <h2 class="repeated">REPEATED VOTES DECREASE THE USERS VOTE BY -1</h2>
  <div class="container">
    <div class="first-input">
     <input v-model="output" type="radio" value="ESTHER & JOSH (300L/400L)" name="gender" id="MR D">
     <label for="MR D">ESTHER & JOSH (300L/400L)</label>
     </div>
    <div class="first-input">
      <input v-model="output" type="radio" value="OLLIE & RUTH (300L)" name="gender" id="Mr A">
     <label for="Mr A">OLLIE & RUTH (300L)</label>
    </div>
     <br>
    <div class="first-input">
   <input v-model="output" type="radio" value="TOYEEB & CHRISTIE (300L)" name="gender" id="MR B">
   <label for="MR B"> TOYEEB & CHRISTIE (300L)</label>
   </div>
  
  <br>
   <div class="first-input">
      <input v-model="output" type="radio" value="AL-AMEEN & SIRAH (300L)" name="gender" id="MR E">
      <label for="MR E">AL-AMEEN & SIRAH (300L)</label>
      </div>
</div>
  <div class="btn-container">
     <button @click="voteCouple" class="btn">Vote</button>
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
 voteCouple() {
 if (this.output === "") {
  alert("choose a candidate")
 } else {
   let coupleVote = {
    output : this.output
  }
  this.output = ""
  votingFireStore.collection("coupleVote").add(coupleVote)
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