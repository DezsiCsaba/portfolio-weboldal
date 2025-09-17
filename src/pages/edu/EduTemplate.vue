<template>
  <div :class="conf.titleClasses">Intézmény</div>
  <div v-if="!insituteUrl">{{conf.institute}}</div>
  <CustomLink
    v-else
    :link="conf.insituteUrl"
    :text="conf.institute"
  />

  <div class="scroll-container">
    <EduProject
      class="scroll-section scroll-card"
      v-for="project in projects"
      :key="project"

      :title="project.title"
      :image-src="project.img"
      :description="project.description"
      :techs="project.techs"
      :roles="project.roles"
    />

    <div
      v-for="(arrayOfDatas, keyOfObject) in conf.datas"
      :key="keyOfObject"
      class="scroll-section"
    >
      <div :class="conf.titleClasses">{{ keyOfObject }}</div>
      <div v-for="data in arrayOfDatas" :key="data">{{ data }}</div>
    </div>
  </div>
</template>

<script setup>
import {reactive} from "vue";
import CustomLink from "components/CustomLink.vue";
import EduProject from "pages/edu/EduProject.vue";

const props = defineProps(['institute', 'insituteUrl', 'titleClasses', 'datas', 'projects'])

const conf = reactive({
  institute: props.institute || '',
  insituteUrl: props.insituteUrl || null,
  titleClasses: props.titleClasses || 'text-bold q-mt-md q-mb-xs',
  datas: props.datas || {},
  projects: props.projects || {}
})

</script>

<style scoped>

.scroll-container {
  flex: 1;  /* take remaining column space */
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;

  scrollbar-width: none;   /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */

  /* ez a kövi rész arra van, hogy a scroll detection kilógjon az oldal legszéléig */
  width: 100vh;
  padding-right: 25vh;
}

.scroll-container::-webkit-scrollbar {
  display: none;  /* Chrome, Safari, Edge */
}

.scroll-section {
  min-height: 100%; /* each section is at least container height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  scroll-snap-align: start;
  padding: 2rem;
}

.scroll-card {
  //display: flex;
  //align-items: center;
}
</style>
