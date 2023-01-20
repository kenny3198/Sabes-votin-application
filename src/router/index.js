import { createRouter, createWebHistory } from 'vue-router'
import loginPage from '../views/loginPage'
import HomeView from '../views/HomeView'
import categoryPage from "@/components/categoryPage"
import MrEbonyPage from "@/components/MrEbonyPage"
import graphicDesigner from "@/components/graphicDesigner"
import StudentOfYear from "@/components/StudentOfYear"
import jagabanOfAbe from "@/components/jagabanOfAbe"
import mostInfluencial from "@/components/mostInfluencial"
import mostSocial from "@/components/mostSocial"
import enterprenureOfTheYear from "@/components/enterprenureOfTheYear"
import missEndowed from "@/components/missEndowed"
import maleWardrobe from "@/components/maleWardrobe"
import photographerPage from "@/components/photographerPage"
import slimShaddy from "@/components/slimShaddy"
import mostPolitical from "@/components/mostPolitical"
import coupleOfYear from "@/components/coupleOfYear"
import excoOfTheYear from "@/components/excoOfTheYear"
import femaleWardrobe from "@/components/femaleWardrobe"
import calmCollected from "@/components/calmCollected"
import bestClique from "@/components/bestClique"
import sportMan from "@/components/sportMan"
import levelOne from "@/components/levelOne"
import levelTwo from "@/components/levelTwo"
import levelThree from "@/components/levelThree"
import levelFour from "@/components/levelFour"
import levelFive from "@/components/levelFive"
import bestRep from "@/components/bestRep"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/levelOne',
    name: 'levelOne',
    component: levelOne
  },
  {
    path: '/bestRep',
    name: 'bestRep',
    component: bestRep
  },
  {
    path: '/levelFive',
    name: 'levelFive',
    component: levelFive
  },
  {
    path: '/levelFour',
    name: 'levelFour',
    component: levelFour
  },
  {
    path: '/levelThree',
    name: 'levelThree',
    component: levelThree
  },
  {
    path: '/levelTwo',
    name: 'levelTwo',
    component: levelTwo
  },
  {
    path: '/femaleWardrobe',
    name: 'femaleWardrobe',
    component: femaleWardrobe
  },
  {
    path: '/sportMan',
    name: 'sportMan',
    component: sportMan
  },
  {
    path: '/bestClique',
    name: 'bestClique',
    component: bestClique
  },
  {
    path: '/calmCollected',
    name: 'calmCollected',
    component: calmCollected
  },
  {
    path: '/excoOfTheYear',
    name: 'excoOfTheYear',
    component: excoOfTheYear
  },
  {
    path: '/mostPolitical',
    name: 'mostPolitical',
    component: mostPolitical
  },
  {
    path: '/coupleOfYear',
    name: 'coupleOfYear',
    component: coupleOfYear
  },
  {
    path: '/photographerPage',
    name: 'photographerPage',
    component: photographerPage
  },
  {
    path: '/slimShaddy',
    name: 'slimShaddy',
    component: slimShaddy
  },
  {
    path: '/StudentOfYear',
    name: 'StudentOfYear',
    component: StudentOfYear
  },
  {
    path: '/maleWardrobe',
    name: 'maleWardrobe',
    component: maleWardrobe
  },
  {
    path: '/missEndowed',
    name: 'missEndowed',
    component: missEndowed
  },
  {
    path: '/enterprenureOfTheYear',
    name: 'enterprenureOfTheYear',
    component: enterprenureOfTheYear
  },
  {
    path: '/mostSocial',
    name: 'mostSocial',
    component: mostSocial
  },
  {
    path: '/mostInfluencial',
    name: 'mostInfluencial',
    component: mostInfluencial
  },
  {
    path: '/jagabanOfAbe',
    name: 'jagabanOfAbe',
    component: jagabanOfAbe
  },
  {
    path: '/graphicDesigner',
    name: 'graphicDesigner',
    component: graphicDesigner
  },
  {
    path: '/categoryPage',
    name: 'categoryPage',
    component: categoryPage
  },
  {
    path: '/loginPage',
    name: 'loginPage',
    component: loginPage
  },
  
  {
    path: '/MrEbonyPage',
    name: 'MrEbonyPage',
    component: MrEbonyPage
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
