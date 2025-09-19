<template>
  <q-page class="flex flex-center column">
    <div class="hero-container">
      <div
        class="hero-img"
        :style="heroBg"
      >
        <div class="img-overlay medium-bg-gradient-strong"/>

        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <g transform="translate(0, -35)">
            <path
              :d="wavePath"
              fill="var(--q-primary)"
            ></path>
          </g>
          <path
            :d="wavePath"
            fill="#ffff"
            fill-opacity="1"
          ></path>
        </svg>

        <div class="hero-content-container q-pl-xl">
          <div class="text-h1-2">Dézsi Csaba</div>
          <div>Junior full-stack fejlesztő</div>
        </div>
      </div>

      <div class="hero-extra-content-container">
        <div class="full-width">
          <div>Felhasználó barát, moduláris weboldalakat és apikat fejlesztek.</div>
        </div>
        <div
          v-for="par in abtMeShort"
          :key="par"
          class="q-my-lg">
          {{par}}
        </div>
      </div>
    </div>

    <AbtMe
      :inner-container-styles="innerContainerStyles"
      :inner-container-classes="innerContainerClasses"
    />

    <MyInterests
      :inner-container-styles="innerContainerStyles"
      :inner-container-classes="innerContainerClasses"
    />
  </q-page>
</template>

<script setup>

import {generatePath, getPathGenDefaultConf} from "src/utils/pathGenerator.js";

defineOptions({
  name: 'AboutPage'
})

import {computed, onMounted} from "vue";
import {hideProfileHeader} from "src/utils/functions.js";
import AbtMe from "components/hero/AbtMe.vue";
import MyInterests from "components/hero/Interests.vue";

onMounted(() => hideProfileHeader())

const heroBg = computed( () => ({
  backgroundImage: 'url(imgs/macbook.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}))

const wavePath = computed(() => generatePath({
  ...getPathGenDefaultConf(),
  amplitude: 120,
  step: 2,
}))

const innerContainerStyles = computed(() => ({
  width: '75%'
}))
const innerContainerClasses = computed(() => (['q-pa-md']))

const abtMeShort = [
  'Középiskolában kezdődött az informatika iránti érdeklődésem, amely az Óbudai Egyetemen és szakmai tapasztalataimon\n' +
  ' keresztül webfejlesztésben és mesterséges intelligenciában mélyült el. 2022 óta junior full-stack fejlesztőként\n' +
  ' dolgozom, miközben kutatási projektekben, köztük egy LLM-ek rákkezelésben való alkalmazását vizsgáló TDK-ban is\n' +
  ' részt vettem. Ma leginkább a webfejlesztés és az MI gyakorlati, moduláris megoldásai érdekelnek.'
]

</script>


<style lang="scss" scoped>
.hero-container {
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
  position: relative;
}

.hero-img {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  svg {
    z-index: 100;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
  }
}

.hero-content-container {
  position: absolute;
  z-index: 100;
  color: white;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.hero-extra-content-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5vw;
}

</style>
