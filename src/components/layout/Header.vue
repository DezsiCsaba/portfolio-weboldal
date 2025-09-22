<template>
  <div class="tool-bar">
    <div>
      <div v-if="globalStore.$state.showProfileNameInHeader">
        Dézsi Csaba
      </div>
    </div>

    <div class="flex row flex-center">
      <div>
        <q-btn
          v-for="btn in navBtnsConfig"
          :key="btn"
          flat

          :to="btn.link"
          :label="btn.label"
        />
      </div>

      <ContactMe direction="row" class="q-ml-none"/>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";
import {useGlobalStore} from "stores/globalStore.js";
import {watchEffect} from "vue";
import {showProfileHeader} from "src/utils/functions.js";
import ContactMe from "components/layout/ContactMe.vue";

defineOptions({name: 'CustomHeader'})

const router = useRouter()
const globalStore = useGlobalStore()

watchEffect(() => {
  const currentRoute = router.currentRoute.value
  if (!currentRoute) return

  if (currentRoute.path !== '/about' && currentRoute.path !== '/') {
    showProfileHeader()
  }
})

const navBtnsConfig = [
  {
    label: 'Tanulmányok',
    link: '/edu'
  }, {
    label: 'Rólam',
    link: '/about'
  }, {
    label: 'Pályafutásom',
    link: '/projects'
  }
]
</script>

<style scoped lang="scss">
.tool-bar {
  margin: 12px 50px 12px 50px;
  padding: 0 10vw 0 10vw;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
