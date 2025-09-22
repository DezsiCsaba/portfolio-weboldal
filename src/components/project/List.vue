<template>
  <div class="container-div column" style="scroll-behavior: smooth">
    <div
      v-for="activity in props.data"
      :key="activity"
      class="activity-container"
    >
      <ActivityCard
        :data="activity"
      />
    </div>
  </div>
</template>

<script setup>
import ActivityCard from "components/project/ActivityCard.vue";

defineOptions({name: 'ListOfProjects'})

const props = defineProps(['data'])
</script>

<style scoped lang="scss">
.activity-container {
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: min(10vh, 25%) min(10vw, 25%) min(10vh, 25%) min(10vw, 25%);
}
</style>
