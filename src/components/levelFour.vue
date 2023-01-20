<template>
    <section>
    <div class="level-face">
   <h1> FACE OF 400L </h1>
    </div>
      <h2 class="repeated">REPEATED VOTES DECREASE THE USERS VOTE BY -1</h2>
  <div class="container">
    <div class="first-input">
      <input v-model="output" type="radio" value="YVK" name="gender" id="Mr A">
     <label for="Mr A">YVK</label>
    </div>
     <br>
    <div class="first-input">
   <input v-model="output" type="radio" value="B.DAMAS" name="gender" id="MR B">
   <label for="MR B">B.DAMAS</label>
   </div>
    <br>
   <div class="first-input">
    <input v-model="output" type="radio" value="A.B SHARP" name="gender" id="MR C">
    <label for="MR C">A.B SHARP</label>
    </div>
  <br>
    <div class="first-input">
      <input v-model="output" type="radio" value="KING KAMAL" name="gender" id="MR E">
      <label for="MR E">KING KAMAL</label>
      </div>
      <br>
  <div class="first-input">
     <input v-model="output" type="radio" value="WHYKAY MONEY" name="gender" id="MR D">
     <label for="MR D">WHYKAY MONEY</label>
     </div>

  </div>
  <div class="btn-container">
     <button @click="voteLevelFour" class="btn">Vote</button>
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
voteLevelFour() {
  if (this.output === "") {
    alert("choose a your candidate")
  }
   else {
    let levelFour = {
    output : this.output
  }
  this.output = ""
  votingFireStore.collection("levelFour").add(levelFour)
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