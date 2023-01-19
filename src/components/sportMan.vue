<template>
    <section>
    <div class="level-face">
   <h1> SPORT MAN OF THE YEAR</h1>
    </div>
      <h2 class="repeated">REPEATED VOTES DECREASE THE USERS VOTE BY -1</h2>
  <div class="container">
    <div class="first-input">
      <input v-model="output" type="radio" value="C4 (300L)" name="gender" id="Mr A">
     <label for="Mr A">C4 (300L)</label>
    </div>
     <br>
    <div class="first-input">
   <input v-model="output" type="radio" value="PEPE (300L)" name="gender" id="MR B">
   <label for="MR B">PEPE (300L)</label>
   </div>
    <br>
   <div class="first-input">
    <input v-model="output" type="radio" value="SPARK B" name="gender" id="MR C">
    <label for="MR C">SPARK B</label>
    </div>
  <br>
  <div class="first-input">
     <input v-model="output" type="radio" value="MONDAY (500L)" name="gender" id="MR D">
     <label for="MR D">MONDAY (500L)</label>
     </div>
     <br>
     <div class="first-input">
      <input v-model="output" type="radio" value="BENTOYE (500L)" name="gender" id="MR E">
      <label for="MR E"> BENTOYE (500L)</label>
      </div>
      
  </div>
  <div class="btn-container">
     <button @click="voteSport" class="btn">Vote</button>
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
voteSport() {
  if (this.output === "") {
    alert("choose a your candiate")
  } else {
    let sportMan = {
    output : this.output
  }
  this.output = ""
  votingFireStore.collection("sportMan").add(sportMan)
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