<template>
  <div class="sticky-nav">
    <transition-group name="fade">
      <q-btn
        v-for="btn in navButtons"
        :key="btn.label"

        round
        class="sub-btn"
        color="secondary"

        @click="navigate(btn.link)"
        v-show="menuOpen"
        :icon="btn.icon"
      >
      </q-btn>
    </transition-group>

    <q-btn fab color="primary" @click="toggleMenu">
      <q-icon name="menu" />
    </q-btn>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {useRouter} from "vue-router";

const router = useRouter()
const menuOpen = ref(false)
const navButtons = [
  { label: 'About', link: '/about', icon: 'person' },
  { label: 'Projects', link: '/work', icon: 'engineering' },
  { label: 'Education', link: '/edu', icon: 'school' }
]

function toggleMenu() { menuOpen.value = !menuOpen.value }
function navigate(link) {
  router.push(link)
}

</script>

<style lang="scss">
@import '../css/app';

.sticky-nav {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  z-index: $z-idx-on-top-of-everything;
}

.sub-btn {
  transform: translateY(-10px);
}
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
