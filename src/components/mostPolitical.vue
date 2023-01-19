<template>
    <section>
    <div class="level-face">
   <h1> MOST POLITICAL </h1>
    </div>
      <h2 class="repeated">REPEATED VOTES DECREASE THE USERS VOTE BY -1</h2>
  <div class="container">
    <div class="first-input">
      <input v-model="output" type="radio" value="SEKAN (400L)" name="gender" id="Mr A">
     <label for="Mr A">SEKAN (400L)</label>
    </div>
     <br>
    <div class="first-input">
   <input v-model="output" type="radio" value="A.B SHARP (400L)" name="gender" id="MR B">
   <label for="MR B">A.B SHARP (400L)</label>
   </div>
    <br>
   <div class="first-input">
    <input v-model="output" type="radio" value="AMOTO (400L)" name="gender" id="MR C">
    <label for="MR C">AMOTO (400L)</label>
    </div>
  <br>
  <div class="first-input">
     <input v-model="output" type="radio" value="B DAMAS (400L)" name="gender" id="MR D">
     <label for="MR D">B DAMAS (400L)</label>
     </div>
     <br>
     <div class="first-input">
      <input v-model="output" type="radio" value="TRIUMP (500L)" name="gender" id="MR E">
      <label for="MR E">TRIUMP (500L)</label>
      </div>
      
  </div>
  <div class="btn-container">
     <button @click="voteMostPolitical" class="btn">Vote</button>
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
 voteMostPolitical() {
 if (this.output === "") {
  alert("choose a candidate")
 } else {
   let mostPoliticalVote = {
    output : this.output
  }
  this.output = ""
  votingFireStore.collection("mostPoliticalVote").add(mostPoliticalVote)
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