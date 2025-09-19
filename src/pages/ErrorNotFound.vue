<template>
  <div class="fullscreen q-pa-md flex flex-center column">
    <img
      src="imgs/illustrations/undraw_not_found.svg"
      alt=". . ."
      class="w-200 q-mb-xl"
    />

    <div
      v-for="i in 2" :key="i"
      class="text-h2 text-center text-primary q-mb-md"
    >
      <div v-if="i === 1">Hoppá..</div>
      <div v-else>Ez az oldal nem található</div>
    </div>
    <q-btn
      class="q-mt-xl"
      color="white"
      text-color="primary"
      outline
      to="/about"
      label="Haza.."
      no-caps
    />
  </div>
</template>

<script setup>
//
</script>


<style scoped>
img {
  max-width: 300px;
  width: 40%;
  height: auto;
  animation: float 2s ease-in-out infinite alternate;
}
</style>
