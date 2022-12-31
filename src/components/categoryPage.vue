<template>
<h1>Welcome!!</h1>
 <div>
    <facePage/>
    <MrEbonyPage/>
    <fresherProspect/>
    <MostRecognized/>
    <BestStudentsPage/>
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
import BestStudentsPage from "@/components/BestStudentsPage"
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

export default {
components: { 
facePage,
 MrEbonyPage,
  fresherProspect,
   MostRecognized,
    BestStudentsPage,
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
    BestClassRep
     }
}
</script>

<style>
.level-face h1{
    background: blue;
    text-transform: uppercase;
    margin: auto;
    width: 50%;
    padding: 8px;
    font-size: 1rem;
    color: black;
}
.level-name input {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin:10px auto;
    padding: 10px;
    
}
.btn-submit{
    padding: 10px 20px;
    margin: 10px;
}
.end{
    padding: 0.75rem;
    color: black;
    background: blue;
    border-radius: 10px;
    text-decoration: none;
}
.router-div{
    margin-top: 20px;
}
</style>