<template>
  <q-page class="flex flex-center column">
    <MyNameIs
      @scrolled-out="showProfileHeader"
      @scrolled-in="hideProfileHeader"
    ></MyNameIs>

    <AbtMe></AbtMe>


  </q-page>
</template>

<script setup>
defineOptions({
  name: 'AboutPage'
})

import MyNameIs from "components/hero/MyNameIs.vue";
import AbtMe from "components/hero/AbtMe.vue";
import {onMounted} from "vue";
import {hideProfileHeader, showProfileHeader} from "src/utils/functions.js";

onMounted(() => hideProfileHeader())

</script>
