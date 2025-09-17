<template>
 <q-layout view="lHh Lpr lff">
   <q-header
     v-if="isPastLandingPage(router)"
   >
     <q-toolbar>
       <q-toolbar-title class="text-h5">
         <div v-if="globalStore.$state.showProfileNameInHeader">
           Dézsi Csaba - Junior Full-stack fejlesztő
         </div>

         <div v-else>
           Portfólió
         </div>
       </q-toolbar-title>

       <div>Quasar v{{ $q.version }}</div>
     </q-toolbar>
   </q-header>

   <q-footer>
     <CustomFooter/>
   </q-footer>

   <q-page-container>
     <router-view />
   </q-page-container>

   <NavFab></NavFab>

 </q-layout>
</template>

<script setup>
import {isPastLandingPage, showProfileHeader} from "src/utils/functions.js";
import {useRouter} from "vue-router";
import {useGlobalStore} from "stores/globalStore.js";
import NavFab from "components/NavFab.vue";
import {watchEffect} from "vue";
import CustomFooter from "components/Footer.vue";

const router = useRouter()
const globalStore = useGlobalStore()

watchEffect(() => {
  const currentRoute = router.currentRoute.value
  if (!currentRoute) return

  if (currentRoute.path !== '/about' && currentRoute.path !== '/') {
    showProfileHeader()
  }
})
</script>

<style lang="scss" scoped>

</style>

