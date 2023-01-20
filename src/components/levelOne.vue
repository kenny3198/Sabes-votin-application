<template>
    <section>
    <div class="level-face">
   <h1> FACE OF 100L </h1>
    </div>
      <h2 class="repeated">REPEATED VOTES DECREASE THE USERS VOTE BY -1</h2>
  <div class="container">
    <div class="first-input">
      <input v-model="output" type="radio" value="KAFFY" name="gender" id="Mr A">
     <label for="Mr A">KAFFY</label>
    </div>
     <br>
    <div class="first-input">
   <input v-model="output" type="radio" value="KEERAH" name="gender" id="MR B">
   <label for="MR B">KEERAH</label>
   </div>
    <br>
   <div class="first-input">
    <input v-model="output" type="radio" value="AYOMIDE" name="gender" id="MR C">
    <label for="MR C">AYOMIDE</label>
    </div>

      
  </div>
  <div class="btn-container">
     <button @click="voteLevel" class="btn">Vote</button>
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
voteLevel() {
  if (this.output === "") {
    alert("choose a your candiate")
  } else {
    let faceOfLevelOne = {
    output : this.output
  }
  this.output = ""
  votingFireStore.collection("faceOfLevelOne").add(faceOfLevelOne)
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