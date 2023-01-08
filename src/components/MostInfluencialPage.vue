<template>
  <form @submit.prevent="Influencial">
       <section>
        <div class="level-face">
   <h1>Most Influencial</h1>
    </div>
    <div class="level-name">
    <input type="text" v-model="name" placeholder="Name" required>
        <input type="text" v-model="nickName" placeholder="Nick-Name" required>
        <input type="text" v-model="level" placeholder="Level" required>
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
  Influencial() {
  let influencial = {
    name: this.name,
    nickName: this.nickName,
    level: this.level
  }
   this.name = "",
    this.nickName = "",
    this.level = ""
  projectFireStore.collection("influencial").add(influencial)
}
}

}
</script>

<style>

</style>