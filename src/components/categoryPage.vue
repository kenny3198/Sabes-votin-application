<template>
<div class="container-button"> 
  <button @click="LevelOneFace">FACE OF 100L</button>
  <button @click="LevelTwoFace">FACE OF 200L</button>
 <button @click="LevelThreeFace">FACE OF 300L</button>
 <button @click="LevelFourFace">FACE OF 400L</button>
 <button @click="LevelFiveFace">FACE OF 500L</button>
<button @click="ebony">MR EBONY</button>
<button @click="student">STUDENT OF THE YEAR</button>
 <button @click="jagaban">JAGABAN OF ABE</button>
  <button @click="graphicDesigner">GRAPHICDESIGNER OF THE YEAR</button>
  <button @click="influencial">MOST INFLUENCIAL</button>
  <button @click="social">MOST SOCIAL</button>
   <button @click="enterprenure">ENTERPRENURE OF THE YEAR </button>
   <button @click="endowed">MISS ENDOWED </button>
    <button @click="wardrobe">MALE EXECUSITE WARDROBE </button>
    <button @click="photographer">PHOTOGRAPHER OF THE YEAR </button>
     <button @click="slimShaddy">SLIM SHADY </button>
      <button @click="mostPolitical">MOST POLITCAL </button>
      <button @click="coupleOfYear">COUPLE OF THE YEAR </button>
       <button @click="excoOfTheYear">EXCO OF THE YEAR </button>
       <button @click="calmCollected">COOL CALM AND COLLECTED</button>
       <button @click="femaleWardrobe">FEMALE EXECUSITE WARDROBE</button>
              <button @click="bestClique">BEST CLIQUE</button>
              <button @click="sportMan">SPORT MAN OF THE YEAR</button>

</div>
    
</template>
<script>
export default {
    methods: {
   LevelOneFace() {
    this.$router.push({name: "levelOne"})
   },
   LevelTwoFace () {
    this.$router.push({name :"levelTwo"})
   },
   LevelThreeFace() {
    this.$router.push({ name: "levelThree"})
   },
   LevelFourFace() {
    this.$router.push({name: "levelFour"})
   },
   LevelFiveFace(){
    this.$router.push({ name: "levelFive"})
   },
   ebony() {
   this.$router.push({name: "MrEbonyPage"})
        },
  student() {
    this.$router.push({ name: "StudentOfYear"})
  },
  graphicDesigner() {
    this.$router.push({name: "graphicDesigner"})
  },
  jagaban() {
    this.$router.push({ name: "jagabanOfAbe"})
  },
  influencial() {
    this.$router.push({ name: "mostInfluencial"})
  },
  social() {
    this.$router.push({name: "mostSocial"})
  },
  enterprenure() {
    this.$router.push({ name: "enterprenureOfTheYear"})
  },
  endowed() {
    this.$router.push({ name: "missEndowed"})
  },
  wardrobe() {
    this.$router.push({ name: "maleWardrobe"})
  },
 photographer() {
  this.$router.push({ name: "photographerPage"})
 },
  slimShaddy() {
  this.$router.push({ name: "slimShaddy"})
 },
   mostPolitical() {
  this.$router.push({ name: "mostPolitical"})
 },
 coupleOfYear() {
  this.$router.push({ name: "coupleOfYear"})
 },
 excoOfTheYear() {
  this.$router.push({ name: "excoOfTheYear"})
 },
 calmCollected() {
  this.$router.push({ name: "calmCollected"})
 },
 femaleWardrobe() {
  this.$router.push({ name : "femaleWardrobe"})
 },
 bestClique() {
  this.$router.push({ name: "bestClique"})
 },
 sportMan() {
  this.$router.push({ name: "sportMan"})
 }
    }
}
</script>
<style scoped>
  .container-button {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  button{
    padding: 20px 120px;
    background: black;
    color: white;
    border: 2px solid gold;
    border-radius: 10px;
    font-size: 1.3rem;
    cursor: pointer;
  }
  
</style>