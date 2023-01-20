<template>
    <section>
    <div class="level-face">
   <h1> ENTERPRENURE OF THE YEAR </h1>
    </div>
    <h2 class="repeated">REPEATED VOTES DECREASE THE USERS VOTE BY -1</h2>
  <div class="container">
    <div class="first-input">
      <input v-model="output" type="radio" value="BLAZE EXCHANGE (500L)" name="gender" id="Mr A">
     <label for="Mr A">BLAZE EXCHANGE (500L)</label>
    </div>
<br>   
     <!-- <div class="first-input">
      <input v-model="output" type="radio" value= "BOLAR (500L)" name="gender" id="Mr A">
     <label for="Mr A">BOLAR (500L)</label>
    </div> -->
     <br>
    <div class="first-input">
   <input v-model="output" type="radio" value="ALUTA GARRI (300L)" name="gender" id="MR B">
   <label for="MR B">ALUTA GARRI (300L)</label>
   </div>
    <br>
   <div class="first-input">
    <input v-model="output" type="radio" value="EMERGENCY LUNDARY (300L)" name="gender" id="MR C">
    <label for="MR C">EMERGENCY LUNDARY (300L)</label>
    </div>
  <br>
  <div class="first-input">
     <input v-model="output" type="radio" value="RELL (300L)" name="gender" id="MR D">
     <label for="MR D">RELL (300L)</label>
     </div>
     <br>
     <div class="first-input">
      <input v-model="output" type="radio" value="ERIC COLLECTION (200L)" name="gender" id="MR E">
      <label for="MR E">ERIC COLLECTION (200L)</label>
      </div>
  </div>
  <div class="btn-container">
     <button @click="voteEnterprenure" class="btn">Vote</button>
    <button @click="results" class="btn">Results</button>
  </div>

   
    </section>
</template>

<script>
import { votingFireStore } from "@/firebase/config"
export default {
data() {
  return {
   output: null,
  }
},
methods: {
 voteEnterprenure() {
 if (this.output === "") {
  alert("choose a candidate")
 } else {
   let enterprenureVote = {
    output : this.output
  }
  this.output = ""
  votingFireStore.collection("enterprenureVote").add(enterprenureVote)
 }
},
results() {
  alert("This page is meant for the admin")
}
},
}
</script>

<style>

</style>