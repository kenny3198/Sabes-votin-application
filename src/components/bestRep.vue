<template>
    <section>
    <div class="level-face">
   <h1> BEST CLASS REP OF THE YEAR </h1>
    </div>
      <h2 class="repeated">REPEATED VOTES DECREASE THE USERS VOTE BY -1</h2>
  <div class="container">
    <div class="first-input">
      <input v-model="output" type="radio" value="JUDE (500L)" name="gender" id="Mr A">
     <label for="Mr A">JUDE (500L)</label>
    </div>
     <br>
    <div class="first-input">
   <input v-model="output" type="radio" value="LARE (400L)" name="gender" id="MR B">
   <label for="MR B">LARE (400L)</label>
   </div>
    <br>
   <div class="first-input">
    <input v-model="output" type="radio" value="RASH (300L)" name="gender" id="MR C">
    <label for="MR C">RASH (300L)</label>
    </div>
  <br>
    <div class="first-input">
      <input v-model="output" type="radio" value="MARYAAN (200L)" name="gender" id="MR E">
      <label for="MR E">MARYAN (200L)</label>
      </div>
      <br>
  <div class="first-input">
     <input v-model="output" type="radio" value="HAFFY (100L)" name="gender" id="MR D">
     <label for="MR D">HAFFY (100L)</label>
     </div>

      
  </div>
  <div class="btn-container">
     <button @click="votebestRep" class="btn">Vote</button>
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
//    name: ""
  }
},
methods: {
votebestRep() {
  if (this.output === "") {
    alert("choose a your candiate")
  } else {
    let bestRep = {
    output : this.output
  }
  this.output = ""
  votingFireStore.collection("bestRep").add(bestRep)
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