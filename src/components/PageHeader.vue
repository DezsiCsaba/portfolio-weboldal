<template>
  <div
    class="custom-header q-pa-xl q-ma-none text-white"
    :style="bgStyle"
  >
    <div class="img-overlay"/>

    <div class="header-content q-pl-xl">
      <div class="text-h3">
        <q-icon :name="conf.icon"/> {{conf.title}}
      </div>

      <div class="text-subtitle2 q-pl-sm">
        {{conf.subtitle}}
      </div>
    </div>

  </div>
</template>

<script setup>
import {computed, reactive} from "vue";

const props = defineProps(['title', 'icon', 'imgSrc', 'subtitle'])

const conf = reactive({
  title: props.title || '',
  icon: props.icon || '',
  imgSrc: props.imgSrc || '',
  subtitle: props.subtitle || ''
})

const bgStyle = computed(() => ({
  backgroundImage: conf.imgSrc ? `url(${conf.imgSrc})` : 'none',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}))
</script>

<style lang="scss" scoped>
@import '../css/styling';

.custom-header {
  width: 100%;
  height: 50vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  position: relative;
}


.custom-header::after {
  //border: 1px red solid;

  content: "";
  position: absolute;
  bottom: 0;        /* push it slightly below header */
  left: 0;
  width: 100%;
  height: 50px;         /* wave height */
  background: white;    /* same as next section background */

  /* top edge curve */
  border-top-left-radius: 50% 60px;
  border-top-right-radius: 50% 60px;
  z-index: 2;
}

.img-overlay {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  background: $primary-bg-gradient//$light-bg-gradient;
}

.header-content {
  z-index: 100;
}
</style>
