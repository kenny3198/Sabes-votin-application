<template>
    <section>
    <div class="level-face">
   <h1>COOL CALM AND COLLECTED </h1>
    </div>
    <h2 class="repeated">REPEATED VOTES DECREASE THE USERS VOTE BY -1</h2>
  <div class="container">
    <div class="first-input">
    <input v-model="output" type="radio" value=" A-L AMEEN  (300L)" name="gender" id="MR C">
    <label for="MR C">AL- AMEEN (300L)</label>
    </div>
    <br>
     <div class="first-input">
      <input v-model="output" type="radio" value="IVOSI (300L)" name="gender" id="MR E">
      <label for="MR E">IVOSI (300L)</label>
      </div>
    <br>
    <div class="first-input">
      <input v-model="output" type="radio" value="WHYKAY MONEY (400L)" name="gender" id="Mr A">
     <label for="Mr A"> WHYKAY MONEY (400L)</label>
    </div>
     <br>
    <div class="first-input">
   <input v-model="output" type="radio" value="PATO (400L)" name="gender" id="MR B">
   <label for="MR B">PATO (400L)</label>
   </div>
    <br>
   <div class="first-input">
   <input v-model="output" type="radio" value="PATO (400L)" name="gender" id="MR B">
   <label for="MR B">SAMUEL (400L)</label>
   </div>

  </div>
  <div class="btn-container">
     <button @click="calmCollected" class="btn">Vote</button>
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
 calmCollected() {
 if (this.output === "") {
  alert("choose a candidate")
 } else {
   let calmCollectedVote = {
    output : this.output
  }
  this.output = ""
  votingFireStore.collection("calmCollectedVote").add(calmCollectedVote)
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