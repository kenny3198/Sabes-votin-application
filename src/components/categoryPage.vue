<template>
<h1 class="welcome">Welcome!!</h1>
   <p>Nominators are tracked with ID, Nominating a candidate Twice call for Disqualification</p>
 <div class="category">
    <facePage/>
    <student-of-year/>
    <MrEbonyPage/>
    <fresherProspect/>
    <MostRecognized/>
    <photographerPage/>
    <ExecutivePage/>
    <most-political-page/>
    <entreprenure-Page/>
    <most-influencial-page/>
    <couple-year-page/>
    <most-endowed-page/>
    <slim-shaddy-page/>
    <sport-man-page/>
    <best-clique-page/>
    <calm-collected/>
    <BestClassRep/>
    <SocialMedia/>
    <GraphicDesigner/>
    <ContentsCreator/>
    <MostExpensive/>
    <jagaban-page/>
    <most-social/>
 </div>
 <div class="router-div">
 <router-link :to="{name: 'lastPage'}" class="end">END</router-link>
 </div>
  </template>
<script>
import facePage from "@/components/facePage"
import MrEbonyPage from '@/components/MrEbonyPage.vue'
import fresherProspect from '@/components/fresherProspect'
import MostRecognized from "@/components/MostRecognized"
import photographerPage from "@/components/photographerPage"
import ExecutivePage from "@/components/ExecutivePage"
import EntreprenurePage from "@/components/EntreprenurePage"
import MostPoliticalPage from "@/components/MostPoliticalPage"
import MostInfluencialPage from "@/components/MostInfluencialPage"
import CoupleYearPage from "@/components/CoupleYearPage"
import MostEndowedPage from "@/components/MostEndowedPage" 
import SlimShaddyPage from "@/components/SlimShaddyPage"
import SportManPage from '@/components/SportManPage'
import BestCliquePage from "@/components/BestCliquePage"
import CalmCollected from "@/components/CalmCollected"
import BestClassRep from "@/components/BestClassRep"
import StudentOfYear from "@/components/StudentOfYear"
import SocialMedia from "@/components/SocialMedia"
import GraphicDesigner from "@/components/GraphicDesigner"
import ContentsCreator from "@/components/ContentsCreator"
import MostExpensive from "@/components/MostExpensive"
import MostSocial from "@/components/MostSocial"
import JagabanPage from "@/components/JagabanPage"
export default {
components: { 
facePage,
 MrEbonyPage,
  fresherProspect,
   MostRecognized,
    photographerPage,
    ExecutivePage,
    EntreprenurePage,
    MostPoliticalPage,
    MostInfluencialPage,
    CoupleYearPage,
    MostEndowedPage,
    SlimShaddyPage,
    SportManPage,
    BestCliquePage,
    CalmCollected,
    BestClassRep,
    StudentOfYear,
    SocialMedia,
    GraphicDesigner,
    ContentsCreator,
    MostExpensive,
    MostSocial,
    JagabanPage
     }
}
</script>

<style lang="scss">
    .welcome {
   padding: 20px;
   margin-top: 0;
    }
.level-face h1{
    background: blue;
    text-transform: uppercase;
    border-radius: 10px;
    margin: auto;
    width: 50%;
    padding: 8px;
    font-size: 1rem;
    color: white;
}
.level-name input {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin:10px auto;
    padding: 10px;
    border-radius: 10px;
    border: none;
    border-bottom: 2px solid grey;
}
.btn-submit{
    padding: 10px 20px;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
    background: blue;
    color: white;
    border: none;
    text-transform: capitalize;
}
.end{
    padding: 0.75rem;
    color: white;
    background: blue;
    border-radius: 10px;
    text-decoration: none;
}
.router-div{
    margin-top: 20px;
}
</style>