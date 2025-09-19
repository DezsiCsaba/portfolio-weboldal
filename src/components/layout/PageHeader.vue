<template>
  <div
    class="custom-header"
    :style="bgStyle"
  >
    <div class="img-overlay medium-bg-gradient-strong"/>

    <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path
        :d="wavePath"
        fill="#ffff"
        fill-opacity="1"
      ></path>
    </svg>

    <div class="header-content q-pl-xl">
      <div class="header-inner-content header-inner-content-l">
        <div class="text-h1-2">
          <q-icon :name="conf.icon"/> {{conf.title}}
        </div>

        <div>{{conf.subtitle}}</div>
      </div>

      <div class="header-inner-content header-inner-content-r">
        <img
          style="max-height: 80%; max-width: 60%;"
          :src="conf.secondaryImgSrc" alt="nope"
        />
      </div>
    </div>

  </div>
</template>

<script setup>
import {computed, reactive} from "vue";
import {generatePath, getPathGenDefaultConf} from "src/utils/pathGenerator.js";

const props = defineProps(['title', 'icon', 'imgSrc', 'subtitle', 'secondaryImgSrc'])

const conf = reactive({
  title: props.title || '',
  icon: props.icon || '',
  imgSrc: props.imgSrc || '',
  secondaryImgSrc: props.secondaryImgSrc || 'imgs/illustrations/undraw_programming.svg',
  subtitle: props.subtitle || ''
})

const bgStyle = computed(() => ({
  backgroundImage: conf.imgSrc ? `url(${conf.imgSrc})` : 'none',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}))

const wavePath = computed(() => generatePath({
  ...getPathGenDefaultConf(),
  amplitude: 120,
  step: 2,
  frequency: 2 * Math.PI / getPathGenDefaultConf().width
}))
</script>

<style lang="scss" scoped>
@import '../../css/styling';

.custom-header {
  width: 100%;
  height: 110vh;

  //display: flex;
  //justify-content: flex-start;
  //align-items: center;

  position: relative;

  svg {
    z-index: 100;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
  }
}



.header-content {
  z-index: 100;
  position: absolute;
  color: white;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5vw;
}

.header-inner-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.header-inner-content-l {
  align-items: flex-start;
}
.header-inner-content-r {
  align-items: center;
}

</style>
