<template>
  <div
    class="custom-footer q-pa-xl q-ma-none text-white"
    style="font-size: 16px"
    :style="bgStyle"
  >
    <div class="img-overlay"/>

    <div class="footer-container">
      <div class="inner-footer-container inner-left">
        <div class="text-bold text-h4" :class="componentMg">Dézsi Csaba</div>

        <ContactMe direction="row" :class="componentMg"/>

        <div :class="componentMg">Copyright © 2025 Dézsi Csaba. All rights reserved.</div>
      </div>

      <div class="inner-footer-container inner-right">
<!--        <div v-for="i in 5" :key="i">asd</div>-->
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed} from "vue";
import ContactMe from "components/ContactMe.vue";

defineOptions({name: 'CustomFooter'})

const componentMg = 'q-my-lg'

const bgStyle = computed(() => ({
  backgroundImage: 'url(imgs/macbook.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}))

</script>

<style lang="scss" scoped>
@import '../css/styling';

.custom-footer {
  width: 100%;
  height: 45vh;
}

.custom-footer::after {
  content: "";
  position: absolute;
  top: 0;        /* push it slightly below header */
  left: 0;
  width: 100%;
  height: 50px;         /* wave height */
  background: white;    /* same as next section background */

  /* top edge curve */
  border-bottom-left-radius: 50% 60px;
  border-bottom-right-radius: 50% 60px;
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

.footer-container {
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;

  position: absolute;
  z-index: 20;
  padding: 10vh 10vw 10vh 10vw;

  display: flex;
  justify-content: space-between;
  align-content: center;
}

.inner-footer-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.inner-left {
  align-items: flex-start;
}
.inner-right {
  align-items: flex-end;
}
</style>
