<template>
    <section>
    <div class="level-face">
   <h1> MOST EXPENSIVE </h1>
    </div>
     <h2 class="repeated">REPEATED VOTES DECREASE THE USERS VOTE BY -1</h2>
  <div class="container">
    <div class="first-input">
      <input v-model="output" type="radio" value="YVK (400L)" name="gender" id="Mr A">
     <label for="Mr A">YVK (400L)</label>
    </div>
     <br>
    <div class="first-input">
   <input v-model="output" type="radio" value="SOCIAL BUTTERFLY (300L)" name="gender" id="MR B">
   <label for="MR B">SOCIAL BUTTERFLY (300l)</label>
   </div>
    <br>
   <div class="first-input">
    <input v-model="output" type="radio" value="YOUNG MONEY (400L)" name="gender" id="MR C">
    <label for="MR C">YOUNG MONEY (400L)</label>
    </div>
  <br>
  
  </div>
  <div class="btn-container">
     <button @click="voteSocial" class="btn">Vote</button>
    <button class="btn">Results</button>
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
 voteSocial() {
if (this.output === "") {
  alert("choose a candidtae")
} else {
    let socialVote = {
    output : this.output
  }
  this.output = ""
  votingFireStore.collection("socialVote").add(socialVote)
}
}
}
}
</script>

<style>

</style>