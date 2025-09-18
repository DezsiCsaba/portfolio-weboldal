<template>
  <div class="edu-container">
    <div class="edu-graphic-display">
      <img
        src="imgs/illustrations/undraw_coding.svg"
        alt="nope"
        style="max-height: 80%; max-width: 350px;"
      />
    </div>
    <div class="info-container">
      <EduProject
        v-for="project in projects"
        :key="project"
        class="info-card"

        :title="project.title"
        :image-src="project.img"
        :description="project.description"
        :techs="project.techs"
        :roles="project.roles"
      />

      <div
        v-for="(arrayOfDatas, keyOfObject) in conf.datas"
        :key="keyOfObject"
        class="info-card"
      >
        <div class="info-card-title">
          <div :class="conf.titleClasses">{{ keyOfObject }}</div>
        </div>
        <div v-for="data in arrayOfDatas" :key="data" class="q-mb-sm">{{ data }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {reactive} from "vue";
import EduProject from "components/edu/EduProject.vue";

const props = defineProps(['institute', 'insituteUrl', 'titleClasses', 'datas', 'projects'])

const conf = reactive({
  institute: props.institute || '',
  insituteUrl: props.insituteUrl || null,
  titleClasses: props.titleClasses || 'text-bold q-mt-md q-mb-xs',
  datas: props.datas || {},
  projects: props.projects || {}
})

</script>

<style lang="scss" scoped>
@import '../../css/quasar-variables';

.edu-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.edu-graphic-display {
  height: 100vh;
  width: 100%;

  position: sticky;
  top: 10vh;  // nem 0, mert a PageHeader-ben 110vh van 100 helyett

  display: flex;
  justify-content: center;
  align-items: center;
}

.info-container {
  width: 100%;
  height: 100%;
  padding-right: 10vh;
}

.info-card {
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.info-card-title {
  color: $q-primary;
  width: 100%;
  display: flex;
  justify-content: flex-start;
}
</style>
