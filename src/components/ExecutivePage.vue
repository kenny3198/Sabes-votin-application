<template>
  <form @submit.prevent="Executive">
     <section>
        <div class="level-face">
   <h1>Executive of the year</h1>
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
  Executive() {
  let executive = {
    name: this.name,
    nickName: this.nickName,
    level: this.level
  }
   this.name = "",
    this.nickName = "",
    this.level = ""
  projectFireStore.collection("executive").add(executive)
}

}
}
</script>

<style>

</style>