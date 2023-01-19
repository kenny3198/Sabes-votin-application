<template>
    <section>
    <div class="level-face">
   <h1>JAGABAN OF ABE </h1>
    </div>
      <h2 class="repeated">REPEATED VOTES DECREASE THE USERS VOTE BY -1</h2>
  <div class="container">
    <div class="first-input">
      <input v-model="output" type="radio" value="COCOA (400L)" name="gender" id="Mr A">
     <label for="Mr A">COCOA (400L)</label>
    </div>
     <br>
    <div class="first-input">
   <input v-model="output" type="radio" value="DAMZY (300L)" name="gender" id="MR B">
   <label for="MR B">DAMZY (300L)</label>
   </div>
    <br>
   <div class="first-input">
    <input v-model="output" type="radio" value="MICKY (300L)" name="gender" id="MR C">
    <label for="MR C">MICKY (300L)</label>
    </div>
  <br>
  <div class="first-input">
     <input v-model="output" type="radio" value="GT (500L)" name="gender" id="MR D">
     <label for="MR D">GT (500L)</label>
     </div>
     <br>
     <div class="first-input">
      <input v-model="output" type="radio" value="IBM (400L)" name="gender" id="MR E">
      <label for="MR E">IBM (400L)</label>
      </div>
      <br>
       <div class="first-input">
      <input v-model="output" type="radio" value="BLAZE (500L)" name="gender" id="MR E">
      <label for="MR E">BLAZE (500L)</label>
      </div>
      <br>
       <div class="first-input">
      <input v-model="output" type="radio" value="BOSS (500L)" name="gender" id="MR E">
      <label for="MR E">BOSSMAN (500L)</label>
      </div>
       <!-- <p> hidden results {{ output }}</p> -->
  </div>
  <div class="btn-container">
     <button @click="voteJagaban" class="btn">Vote</button>
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
 voteJagaban() {
if (this.output === "") {
  alert("choose a condidate")
} else {
    let jagabanVote = {
    output : this.output
  }
  this.output = ""
  votingFireStore.collection("jagabanVote").add(jagabanVote)
}
},
results() {
  alert("this page is meants for the admin")  
}
}
}
</script>

<style>

</style>