<template>
    <section>
    <div class="level-face">
   <h1> FACE OF 200L </h1>
    </div>
      <h2 class="repeated">REPEATED VOTES DECREASE THE USERS VOTE BY -1</h2>
  <div class="container">
    <div class="first-input">
      <input v-model="output" type="radio" value="MIMI" name="gender" id="Mr A">
     <label for="Mr A">MIMI</label>
    </div>
     <br>
    <div class="first-input">
   <input v-model="output" type="radio" value="GIFTIE" name="gender" id="MR B">
   <label for="MR B">GIFTIE</label>
   </div>
    <br>
   <div class="first-input">
    <input v-model="output" type="radio" value="SANUTH" name="gender" id="MR C">
    <label for="MR C">SANUTH</label>
    </div>
  <br>
  <div class="first-input">
     <input v-model="output" type="radio" value="ANN" name="gender" id="MR D">
     <label for="MR D">ANN</label>
     </div>
     <br>
     <div class="first-input">
      <input v-model="output" type="radio" value="MUGABE" name="gender" id="MR E">
      <label for="MR E">MUGABE</label>
      </div>
      
  </div>
  <div class="btn-container">
     <button @click="voteLevelTwo" class="btn">Vote</button>
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
voteLevelTwo() {
  if (this.output === "") {
    alert("choose a your candiate")
  } else {
    let levelTwo = {
    output : this.output
  }
  this.output = ""
  votingFireStore.collection("levelTwo").add(levelTwo)
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