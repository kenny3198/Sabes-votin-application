<template>
    <section>
    <div class="level-face">
   <h1> BEST CLIQUE </h1>
    </div>
      <h2 class="repeated">REPEATED VOTES DECREASE THE USERS VOTE BY -1</h2>
  <div class="container">
    <div class="first-input">
      <input v-model="output" type="radio" value="IBREX & MERLEXY (300L)" name="gender" id="Mr A">
     <label for="Mr A">IBREX & MERLEXY (300L)</label>
    </div>
     <br>
    <div class="first-input">
   <input v-model="output" type="radio" value="PRETTY GIRLS SQUARD (300L)" name="gender" id="MR B">
   <label for="MR B">PRETTY GIRLS SQUARD (300L)</label>
   </div>
    <br>
   <div class="first-input">
    <input v-model="output" type="radio" value="GLTDS (400L)" name="gender" id="MR C">
    <label for="MR C">GLTDS (400L)</label>
    </div>
  <br>
  <div class="first-input">
     <input v-model="output" type="radio" value="NASSOTO (NANISSA & AMATO) (500L)" name="gender" id="MR D">
     <label for="MR D">NASSOTO (NANISSA & AMATO) (500L)</label>
     </div>
     <br>
     <div class="first-input">
      <input v-model="output" type="radio" value="B.O.B (400L)" name="gender" id="MR E">
      <label for="MR E"> B.O.B (400L)</label>
      </div>
      
  </div>
  <div class="btn-container">
     <button @click="voteBestClique" class="btn">Vote</button>
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
voteBestClique() {
  if (this.output === "") {
    alert("choose a your candiate")
  } else {
    let bestClique = {
    output : this.output
  }
  this.output = ""
  votingFireStore.collection("bestClique").add(bestClique)
  }
},
results() {
  alert("this page is meant for the admin")
}
}
}
</script>

<style>

</style>