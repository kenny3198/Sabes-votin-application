<template>
  <form @submit.prevent="photographerPage">
    <section>
       <div class="level-face">
   <h1> photographer of the year</h1>
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
  photographerPage () {
    let photographerPage = {
      name: this.name,
      nickName: this.nickName,
      level: this.level
    }
     this.name = "",
    this.nickName = "",
    this.level = ""
    projectFireStore.collection("photographerPage").add(photographerPage)
  }
}
}
</script>

<style>

</style>