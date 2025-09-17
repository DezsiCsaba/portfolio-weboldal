<template>
  <div
    ref="container"
    class="container-div"
    :style="containerStyle"
  >
    <transition appear>
      <q-card flat class="q-pa-md transparent" v-show="!globalStore.$state.showProfileNameInHeader">
        <transition appear>
          <div class="q-mb-md fira-code-text" v-if="cutOffForOtherText">Heló, az én nevem,</div>

        </transition>

        <div
          class="text-on-bg-light"
          style="font-size: clamp(40px, 8vw, 80px)"
        >
          Dézsi Csaba István.
        </div>

        <transition-group appear>
          <div class="text-weight-medium text-on-bg q-mt-md" v-if="cutOffForOtherText">Junior full-stack fejlesztő vagyok</div>
          <div class="text-caption text-on-bg q-mt-xs" v-if="cutOffForOtherText">Felhasználó barát, moduláris weboldalakat és apikat fejlesztek.</div>
        </transition-group>

      </q-card>
    </transition>

  </div>
</template>

<script setup>
import {computed, watch} from "vue";
import {useScroll} from "src/utils/functions.js";
import {useGlobalStore} from "stores/globalStore.js";

const { scrollY } = useScroll()

const emits = defineEmits(['scrolledOut', 'scrolledIn'])
const globalStore = useGlobalStore()

const progress = computed(() => {
  const maxScroll = 500
  return Math.min(scrollY.value / maxScroll, 1)
})

const cutOffForOtherText = computed(() => progress.value < .2)


const containerStyle = computed(() => {
  const scale = 1 - progress.value * .5 // shrink to 50%
  const x = progress.value * 20 // move left
  const y = progress.value * -100  // move up

  watch(progress, (p) => {
    if (p >= 1) emits('scrolledOut');
    else emits('scrolledIn');
  })

  return {
    position: "sticky",
    top: "40px",
    left: "0",

    transform: `translate(${x}px, ${y}px) scale(${scale})`,
    transformOrigin: "top left",
    transition: "transform 0.5s ease-out",
    zIndex: 10,
  }
})


</script>
