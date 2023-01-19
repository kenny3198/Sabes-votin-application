<template>
    <section>
    <div class="level-face">
   <h1> EXCO OF THE YEAR </h1>
    </div>
      <h2 class="repeated">REPEATED VOTES DECREASE THE USERS VOTE BY -1</h2>
  <div class="container">
    <div class="first-input">
      <input v-model="output" type="radio" value="HARDY (300L)" name="gender" id="Mr A">
     <label for="Mr A">HARDY (300L)</label>
    </div>
     <br>
    <div class="first-input">
   <input v-model="output" type="radio" value="SOCIAL BUTTERFLY (300L)" name="gender" id="MR B">
   <label for="MR B">SOCIAL BUTTERFLY (300L)</label>
   </div>
    <br>
   <div class="first-input">
    <input v-model="output" type="radio" value="B.DAMAS (400L)" name="gender" id="MR C">
    <label for="MR C">B.DAMAS (400L)</label>
    </div>
  <br>
  <div class="first-input">
     <input v-model="output" type="radio" value="T.GOD (300L)" name="gender" id="MR D">
     <label for="MR D">T.GOD (300L)</label>
     </div>

      
  </div>
  <div class="btn-container">
     <button @click="voteExco" class="btn">Vote</button>
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
 voteExco() {
 if (this.output === "") {
  alert("choose a candidate")
 } else {
   let excoVote = {
    output : this.output
  }
  this.output = ""
  votingFireStore.collection("excoVote").add(excoVote)
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