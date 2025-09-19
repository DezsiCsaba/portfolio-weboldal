<template>
  <div class="timeline">
    <GitCommit
      v-for="commit in commits"
      :key="commit.id"
      :commit="commit"
    />
  </div>
</template>

<script setup>
import GitCommit from "components/project/GitCommit.vue";


const workCommits = [
  {
    date: new Date('2022-09-01'),
    branch: 'work',
    title: 'Gyakornoki pozíció kezdete az Antenna Hungáriánál',
    description: 'Tesztelési és támogatási feladatok, első tapasztalatok éles rendszerekkel.',
    techs: ['Tesztelés', 'Támogatás'],
    label: 'Gyakornok'
  }, {
    date: new Date('2024-07-01'),
    branch: 'work',
    title: 'Gyakornoki pozíció kezdete az Antenna Hungáriánál',
    description: 'Tesztelési és támogatási feladatok, első tapasztalatok éles rendszerekkel.',
    techs: ['Tesztelés', 'Támogatás'],
    label: 'Gyakornok'
  },
]

const uniCommits = [
  {
    date: new Date('2023-03-15'),
    branch: 'uni',
    title: 'TDK projekt – MI az onkológiai kezelésekben',
    description: 'Kutatás az LLM-ek kemoterápia optimalizálásában való alkalmazásáról.',
    techs: ['Python', 'LLM-ek', 'Optimalizálás'],
    label: 'TDK 2025'
  },
]

const personalCommits = [
  {
    date: new Date('2024-09-01'),
    branch: 'personal',
    title: 'Játékfejlesztési mellékprojekt',
    description: 'Prototípus étterem-menedzsment játék Unity-ben.',
    techs: ['Unity', 'C#'],
    label: 'Mellékprojekt'
  }
]

const commits = [...workCommits, ...uniCommits, ...personalCommits]


</script>

<style scoped>
.timeline {
  min-height: 100vh;
  width: 75%;

  display: flex;
  flex-direction: column;
  margin: 2rem;
  position: relative;
}
</style>
