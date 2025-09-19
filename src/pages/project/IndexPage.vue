<template>
  <q-page>
    <PageHeader
      title="Pályafutásom"
      subtitle="Az összes nagyobb projekt amin dolgoztam"
      icon="engineering"
      img-src="imgs/coding.jpg"
      secondary-img-src="imgs/illustrations/undraw_coding.svg"
    />
  </q-page>

  <div class="container-div">
    <GitTimeline
      style="width: 75%"
      class="q-pa-md"
    />
  </div>

</template>

<script setup>
import PageHeader from "components/layout/PageHeader.vue";
import GitTimeline from "components/project/GitTimeline.vue";

defineOptions({name: 'ProjectList'})
</script>


<style scoped lang="scss">

</style>
