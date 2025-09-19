<template>
  <q-page class="flex flex-center column" style="height: 100vh">
    <!-- Animated image or GIF -->
    <img
      src="imgs/illustrations/undraw_wip.svg"
      alt=". . ."
      class="w-200 q-mb-xl"
    />

    <div
      v-for="i in 2" :key="i"
      class="text-h2 text-center text-primary q-mb-md"
    >
      <div v-if="i === 1">Hoppá..</div>
      <div v-else>Még dolgozok rajta</div>
    </div>

    <div class="text-subtitle2 text-center text-grey-8">
      Nézz vissza később a frissítésekért
    </div>

    <q-btn
      class="q-mt-xl"
      color="primary"
      outline
      @click="takeBack"
      label="Vissza.."
      no-caps
    />
  </q-page>
</template>

<script setup>

import {useRouter} from "vue-router";

const router = useRouter()
const takeBack = () => router.back()
</script>

<style scoped>
img {
  max-width: 300px;
  width: 40%;
  height: auto;
  animation: float 2s ease-in-out infinite alternate;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-10px);
  }
}
</style>
