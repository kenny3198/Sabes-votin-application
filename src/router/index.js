import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import lastPage from '../views/lastPage.vue'
import loginPage from '../views/loginPage'
import categoryPage from "@/components/categoryPage"
import facePage from "@/components/facePage"
import MrEbonyPage from "@/components/MrEbonyPage"
import fresherProspect from '@/components/fresherProspect'
import MostRecognized from "@/components/MostRecognized"
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
import photographerPage from "@/components/photographerPage"
import JagabanPage from "@/components/JagabanPage"
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/GraphicDesigner',
    name: 'GraphicDesigner',
    component: GraphicDesigner
  },
  {
    path: '/JagabanPage',
    name: 'JagabanPage',
    component: JagabanPage
  },
  {
    path: '/photographerPage',
    name: 'photographerPage',
    component: photographerPage
  },
  {
    path: '/MostSocial',
    name: 'MostSocial',
    component: MostSocial
  },

  {
    path: '/MostExpensive',
    name: 'MostExpensive',
    component: MostExpensive
  },
  {
    path: '/ContentsCreator',
    name: 'ContentsCreator',
    component: ContentsCreator
  },
  {
    path: '/lastPage',
    name: 'lastPage',
    component: lastPage
  },
  {
    path: '/SocialMedia',
    name: 'SocialMedia',
    component: SocialMedia
  },
  {
    path: '/StudentOfYear',
    name: 'StudentOfYear',
    component: StudentOfYear
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
    path: '/facePage',
    name: 'facePage',
    component: facePage
  },
  {
    path: '/MrEbonyPage',
    name: 'MrEbonyPage',
    component: MrEbonyPage
  },
  {
    path: '/fresherProspect',
    name: 'fresherProspect',
    component: fresherProspect
  },
  {
    path: '/MostRecognized',
    name: 'MostRecognized',
    component: MostRecognized
  },
  
  {
    path: '/ExecutivePage',
    name: 'ExecutivePage',
    component: ExecutivePage
  },
  {
  path: '/EntreprenurePage',
  name: 'EntreprenurePage',
  component: EntreprenurePage
},
{
  path: '/MostPoliticalPage',
  name: 'MostPoliticalPage',
  component: MostPoliticalPage
},
{
  path: '/MostinfluencialPage',
  name: 'MostInfluencialPage',
  component: MostInfluencialPage
},
{
  path: '/CoupleYearPage',
  name: 'CoupleYearPage',
  component: CoupleYearPage
},
{
  path: '/MostEndowedPage',
  name: 'MostEndowedPage',
  component: MostEndowedPage
},
{
  path: '/SlimShaddyPage',
  name: 'SlimShaddyPage',
  component: SlimShaddyPage
},
{
  path: '/SportManPage',
  name: 'SportManPage',
  component: SportManPage
},
{
  path: '/BestCliquePage',
  name: 'BestCliquePage',
  component: BestCliquePage
},
{
  path: '/CalmCollected',
  name: 'CalmCollected',
  component: CalmCollected
},
{
  path: '/BestClassRep',
  name: 'BestClassRep',
  component: BestClassRep
},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
