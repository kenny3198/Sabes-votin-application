<template>
    <section>
    <div class="level-face">
   <h1>GRAPHICDESIGNER OF THE YEAR </h1>
    </div>
      <h2 class="repeated">REPEATED VOTES DECREASE THE USERS VOTE BY -1</h2>
  <div class="container">
    <div class="first-input">
      <input v-model="output" type="radio" value="CLASSIC (100L)" name="gender" id="Mr A">
     <label for="Mr A">CLASSIC (100L)</label>
    </div>
     <br>
    <div class="first-input">
   <input v-model="output" type="radio" value="PRINCE UMAR (200L)" name="gender" id="MR B">
   <label for="MR B">PRINCE UMAR (200L)</label>
   </div>
    <br>
   <div class="first-input">
    <input v-model="output" type="radio" value="JEFF (300L)" name="gender" id="MR C">
    <label for="MR C">JEFF (300L)</label>
    </div>
  <br>
  <div class="first-input">
     <input v-model="output" type="radio" value="WALE (500L)" name="gender" id="MR D">
     <label for="MR D">WALE (500l)</label>
     </div>
     <br>
     <div class="first-input">
      <input v-model="output" type="radio" value="YEBO (500L)" name="gender" id="MR E">
      <label for="MR E">YEBO (500L)</label>
      </div>
       <!-- <p> hidden results {{ output }}</p> -->
  </div>
  <div class="btn-container">
     <button @click="voteGraphic" class="btn">Vote</button>
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
voteGraphic() {
if (this.output === "") {
  alert("choose a candidate")
} else {
    let graphicVote = {
    output : this.output
  }
  this.output = ""
  votingFireStore.collection("graphicVote").add(graphicVote)
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