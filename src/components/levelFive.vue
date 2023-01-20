
<template>
    <section>
    <div class="level-face">
   <h1> FACE OF 500L </h1>
    </div>
      <h2 class="repeated">REPEATED VOTES DECREASE THE USERS VOTE BY -1</h2>
  <div class="container">
    <div class="first-input">
      <input v-model="output" type="radio" value="JUDE" name="gender" id="Mr A">
     <label for="Mr A">JUDE</label>
    </div>
     <br>
    <div class="first-input">
   <input v-model="output" type="radio" value="GT" name="gender" id="MR B">
   <label for="MR B">GT</label>
   </div>
    <br>
   <div class="first-input">
    <input v-model="output" type="radio" value="BERRY" name="gender" id="MR C">
    <label for="MR C">BERRY</label>
    </div>
  <br>
  <div class="first-input">
     <input v-model="output" type="radio" value="BOSSMAN" name="gender" id="MR D">
     <label for="MR D">BOSSMAN</label>
     </div>
     <br>
     <div class="first-input">
      <input v-model="output" type="radio" value="BLAZE" name="gender" id="MR E">
      <label for="MR E"> BLAZE</label>
      </div>
      
  </div>
  <div class="btn-container">
     <button @click="voteLevelFive" class="btn">Vote</button>
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
voteLevelFive() {
  if (this.output === "") {
    alert("choose a your candidate")
  }
   else {
    let levelFive = {
    output : this.output
  }
  this.output = ""
  votingFireStore.collection("levelFive").add(levelFive)
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