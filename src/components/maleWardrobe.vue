<template>
    <section>
    <div class="level-face">
   <h1> MALE EXQUISITE WARDROBE </h1>
    </div>
      <h2 class="repeated">REPEATED VOTES DECREASE THE USERS VOTE BY -1</h2>
  <div class="container">
    <div class="first-input">
      <input v-model="output" type="radio" value="PATO (400L)" name="gender" id="Mr A">
     <label for="Mr A">PATO (400L)</label>
    </div>
     <br>
    <div class="first-input">
   <input v-model="output" type="radio" value="WEAKLESS (300L)" name="gender" id="MR B">
   <label for="MR B">WEAKLESS (300L)</label>
   </div>
    <br>
   <div class="first-input">
    <input v-model="output" type="radio" value="MICHEAL (300L)" name="gender" id="MR C">
    <label for="MR C">MICHEAL (300L)</label>
    </div>
  <br>
  <div class="first-input">
     <input v-model="output" type="radio" value="REL (300L)" name="gender" id="MR D">
     <label for="MR D">REL (300L)</label>
     </div>
     <br>
     <div class="first-input">
      <input v-model="output" type="radio" value="JOSH (400L)" name="gender" id="MR E">
      <label for="MR E"> JOSH (400L)</label>
      </div>
      
  </div>
  <div class="btn-container">
     <button @click="voteMaleWardrobe" class="btn">Vote</button>
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
voteMaleWardrobe() {
  if (this.output === "") {
    alert("choose a your candiate")
  } else {
    let maleWardrobeVote = {
    output : this.output
  }
  this.output = ""
  votingFireStore.collection("maleWardrobeVote").add(maleWardrobeVote)
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