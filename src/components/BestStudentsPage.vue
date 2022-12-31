<template>
  <form @submit.prevent="bestStudents">
    <section>
        <div class="level-face">
   <h1>Best Students From the Level 1 to 5</h1>
    </div>
    <div class="level-name">
    <input type="text" v-model="name" placeholder="Name">
        <input type="text" v-model="nickName" placeholder="Nick-Name">
        <input type="text" v-model="level" placeholder="Level">
        <button class="btn-submit">submit</button>
    </div>
  </section>
  </form>
</template>

<script>
import { projectFireStore } from "@/firebase/config"
export default {
data() {
  return {
    name: "",
    nickName: "",
    level: ""
  }
},
methods: {
  bestStudents () {
    let bestStudent = {
      name: this.name,
      nickName: this.nickName,
      level: this.level
    }
     this.name = "",
    this.nickName = "",
    this.level = ""
    projectFireStore.collection("bestStudent").add(bestStudent)
  }
}
}
</script>

<style>

</style>