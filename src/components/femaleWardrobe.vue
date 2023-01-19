<template>
    <section>
    <div class="level-face">
   <h1> FEMALE EXQUISITE WARDROBE </h1>
    </div>
      <h2 class="repeated">REPEATED VOTES DECREASE THE USERS VOTE BY -1</h2>
  <div class="container">
    <div class="first-input">
      <input v-model="output" type="radio" value="SOKOLAYAM (300L)" name="gender" id="Mr A">
     <label for="Mr A">SOKOLAYAM (300L)</label>
    </div>
     <br>
    <div class="first-input">
   <input v-model="output" type="radio" value="YETUNDE (400L)" name="gender" id="MR B">
   <label for="MR B">YETUNDE (400L)</label>
   </div>
      
  </div>
  <div class="btn-container">
     <button @click="voteFemaleWardrobe" class="btn">Vote</button>
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
voteFemaleWardrobe() {
  if (this.output === "") {
    alert("choose a your candiate")
  } else {
    let femaleWardrobeVote = {
    output : this.output
  }
  this.output = ""
  votingFireStore.collection("femaleWardrobeVote").add(femaleWardrobeVote)
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