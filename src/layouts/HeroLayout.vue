<template>
 <q-layout view="lHh Lpr lff">
   <q-header
     class="custom-header"
     :class="{ 'scrolled-header': scrolled }"
     v-if="isPastLandingPage(router)"
   >
     <CustomHeader/>
     <q-linear-progress
       v-show="scrolled"
       color="primary"
       track-color="gray"
       :value="scrollProgress"
     />
   </q-header>

   <q-footer v-if="isPastLandingPage(router)">
     <CustomFooter/>
   </q-footer>

   <q-page-container>
     <router-view />
   </q-page-container>

<!--   <NavFab></NavFab>-->

 </q-layout>
</template>

<script setup>
import {isPastLandingPage} from "src/utils/functions.js";
import {useRouter} from "vue-router";
import CustomFooter from "components/layout/Footer.vue";
import CustomHeader from "components/layout/Header.vue";
import {onMounted, onUnmounted, ref} from "vue";

const router = useRouter()
// const { scrollY } = useScroll()

const scrolled = ref(false)
const scrollProgress = ref(0)

// const scrollProgress = computed(() => {
//   const maxScroll = 500
//   return Math.min(scrollY.value / maxScroll, 1)
// })

function handleScroll () {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = docHeight > 0 ? scrollTop / docHeight : 0
  scrolled.value = scrollTop > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
@import '../css/quasar-variables';
@import '../css/app';

.custom-header {
  background: transparent;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

.custom-header.scrolled-header {
  background: white; //$q-primary;
  color: $primary-text-custom;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}
</style>

