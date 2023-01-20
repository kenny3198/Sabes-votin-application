<template>
    <section>
    <div class="level-face">
   <h1> FACE OF 300L </h1>
    </div>
      <h2 class="repeated">REPEATED VOTES DECREASE THE USERS VOTE BY -1</h2>
  <div class="container">
    <div class="first-input">
      <input v-model="output" type="radio" value="T.God" name="gender" id="Mr A">
     <label for="Mr A">T.GOD</label>
    </div>
     <br>
    <div class="first-input">
   <input v-model="output" type="radio" value="RELL" name="gender" id="MR B">
   <label for="MR B">RELL</label>
   </div>
    <br>
   <div class="first-input">
    <input v-model="output" type="radio" value="WEEKLESS" name="gender" id="MR C">
    <label for="MR C">WEEKLESS</label>
    </div>
  <br>
    <div class="first-input">
      <input v-model="output" type="radio" value="MICKY" name="gender" id="MR E">
      <label for="MR E">MICKY</label>
      </div>
      <br>
  <div class="first-input">
     <input v-model="output" type="radio" value="DAMZY" name="gender" id="MR D">
     <label for="MR D">DAMZY</label>
     </div>

      
  </div>
  <div class="btn-container">
     <button @click="voteLevelThree" class="btn">Vote</button>
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
voteLevelThree() {
  if (this.output === "") {
    alert("choose a your candiate")
  } else {
    let levelThree = {
    output : this.output
  }
  this.output = ""
  votingFireStore.collection("levelThree").add(levelThree)
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