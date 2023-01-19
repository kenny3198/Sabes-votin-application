<template>
    <section>
    <div class="level-face">
   <h1> MISS ENDOWED </h1>
    </div>
      <h2 class="repeated">REPEATED VOTES DECREASE THE USERS VOTE BY -1</h2>
  <div class="container">
    <div class="first-input">
      <input v-model="output" type="radio" value="IVOSI (300L)" name="gender" id="Mr A">
     <label for="Mr A">IVOSI (300L)</label>
    </div>
     <br>
    <div class="first-input">
   <input v-model="output" type="radio" value="CHRISTIANA (300L)" name="gender" id="MR B">
   <label for="MR B">CHRISTIANA (300L)</label>
   </div>
    <br>
   <div class="first-input">
    <input v-model="output" type="radio" value="SIRAH (300L)" name="gender" id="MR C">
    <label for="MR C">SIRAH (300L)</label>
    </div>
  <br>
  <div class="first-input">
     <input v-model="output" type="radio" value="mr d" name="gender" id="MR D">
     <label for="MR D">MR D</label>
     </div>
     <br>
     <div class="first-input">
      <input v-model="output" type="radio" value="YETUNDE (400L)" name="gender" id="MR E">
      <label for="MR E">YETUNDE (400L)</label>
      </div>
       <!-- <p> hidden results {{ output }}</p> -->
  </div>
  <div class="btn-container">
     <button @click="voteMissEndowed" class="btn">Vote</button>
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
 voteMissEndowed() {
if (this.output === "") {
  alert("choose a condidate")
} else {
    let missEndowedVote = {
    output : this.output
  }
  this.output = ""
  votingFireStore.collection("missEndowedVote").add(missEndowedVote)
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