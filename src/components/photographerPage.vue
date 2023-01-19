<template>
    <section>
    <div class="level-face">
   <h1> PHOTOGRAPHER OF THE YEAR </h1>
    </div>
    <h2 class="repeated">REPEATED VOTES DECREASE THE USERS VOTE BY -1</h2>
  <div class="container">
    <div class="first-input">
      <input v-model="output" type="radio" value="JUSTICE (STUDIOX) (400L)" name="gender" id="Mr A">
     <label for="Mr A">JUSTICE (STUDIOX) (400)</label>
    </div>
     <br>
    <div class="first-input">
   <input v-model="output" type="radio" value="MOTIYOKO PHOTOGRAPHY (300L)" name="gender" id="MR B">
   <label for="MR B"> MOTIYOKO PHOTOGRAPHY (300L)</label>
   </div>
    <br>
   <div class="first-input">
    <input v-model="output" type="radio" value="SAGE (400L)" name="gender" id="MR C">
    <label for="MR C">SAGE (400L)</label>
    </div>
  <br>
  <div class="first-input">
     <input v-model="output" type="radio" value="MICKY BERRY (200L)" name="gender" id="MR D">
     <label for="MR D">MICKY BERRY (200L)</label>
     </div>
</div>
  <div class="btn-container">
     <button @click="votePhotographer" class="btn">Vote</button>
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
 votePhotographer() {
 if (this.output === "") {
  alert("choose a candidate")
 } else {
   let photographerVote = {
    output : this.output
  }
  this.output = ""
  votingFireStore.collection("photographerVote").add(photographerVote)
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