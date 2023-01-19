<template>
    <section>
    <div class="level-face">
   <h1>STUDENT OF THE YEAR </h1>
    </div>
     <h2 class="repeated">REPEATED VOTES DECREASE THE USERS VOTE BY -1</h2>
  <div class="container">
    <div class="first-input">
      <input v-model="output" type="radio" value="JUDE (500L)" name="gender" id="Mr A">
     <label for="Mr A">JUDE (500L)</label>
    </div>
     <br>
    <div class="first-input">
   <input v-model="output" type="radio" value="BOSSMAN (500L)" name="gender" id="MR B">
   <label for="MR B"> BOSSMAN (500L)</label>
   </div>
    <br>
   <div class="first-input">
    <input v-model="output" type="radio" value="BERRY (500L)" name="gender" id="MR C">
    <label for="MR C">BERRY (500L)</label>
    </div>
  <br>
  <div class="first-input">
     <input v-model="output" type="radio" value="PROF (500L)" name="gender" id="MR D">
     <label for="MR D">PROFF (500L)</label>
     </div>
     <br>
     <div class="first-input">
      <input v-model="output" type="radio" value="TIJANI (500L)" name="gender" id="MR E">
      <label for="MR E">TIJANI (500L)</label>
      </div>
       <!-- <p> hidden results {{ output }}</p> -->
  </div>
  <div class="btn-container">
     <button @click="voteStudentOfTheYear" class="btn">Vote</button>
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
 voteStudentOfTheYear() {
if (this.output === "") {
  alert("choose a candidate")
} else {
    let studentOfYearVote = {
    output : this.output
  }
  this.output = ""
  votingFireStore.collection("studentOfYearVote").add(studentOfYearVote)
}
},
results() {
  alert("this page is meant for admin")
}
}
}
</script>

<style>

</style>