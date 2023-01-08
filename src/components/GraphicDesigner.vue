<template>
  <form @submit.prevent="GraphicDesigner">
    <section>
        <div class="level-face">
   <h1>GraphicDesigner Of the year</h1>
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
    GraphicDesigner() {
  let graphicDesigner = {
    name: this.name,
    nickName: this.nickName,
    level: this.level
  }
   this.name = "",
    this.nickName = "",
    this.level = ""
  projectFireStore.collection("graphicDesigner").add(graphicDesigner)
}
  }

}
</script>

<style>

</style>