<template>
  <div class="timeline">
    <GitCommit
      v-for="commit in dataConf"
      :key="commit.id"
      :commit="commit"
    />
  </div>
</template>

<script setup>
import GitCommit from "components/project/GitCommit.vue";
import {onMounted, reactive, watchEffect} from "vue";
import {formatDate} from "src/utils/functions.js";


const workCommits = [
  {
    date: { start: new Date('2022-09-01'), end: new Date('2025-09-05') },
    title: 'Gyakornoki pozíció kezdete az Antenna Hungáriánál',
    description: 'Tesztelési és támogatási feladatok.',
    techs: ['Tesztelés', 'Támogatás'],
    label: 'Gyakornok'
  }, {
    date: { start: new Date('2024-07-01'), end: new Date('2025-09-05') },
    title: 'MIKROBI 2',
    description: 'Éles rendszer fejlesztése és üzemeltetése.',
    techs: ['JavaScript', 'Node.js', 'Vue', 'Quasar', 'Sequelize', 'MySQL'],
    label: 'Gyakornok'
  }, {
    date: { start: new Date('2025-01-01'), end: new Date('2025-09-05') },
    title: 'IOT Dashboard',
    description: 'Második nagy éles projektben fejlesztése és üzemeltetése.',
    techs: ['JavaScript', 'Node.js', 'Vue', 'Quasar', 'Sequelize', 'MySQL'],
    label: 'Gyakornok'
  },
]

const uniCommits = [
  {
    date: { start: new Date('2025-02-01'), end: new Date('2025-05-14') },
    title: 'TDK projekt – MI az onkológiai kezelésekben',
    description: 'Kutatás az LLM-ek kemoterápia optimalizálásában való alkalmazásáról.',
    techs: ['Python', 'LLM-ek'],
    label: 'TDK 2025'
  }, {
    date: { start: new Date('2025-08-01'), end: null },
    title: 'CINTI 2025 cikk',
    description: 'IEEE 25th International Symposium on Computational Intelligence and Informatics (CINTI 2025) - ' +
      '"LLM-Based Decision Support for the Planning of Personalized Chemotherapy."',
    techs: ['Python', 'LLM-ek'],
    label: 'TDK 2025'
  },
]

const personalCommits = [
  {
    date: { start: new Date('2025-07-01'), end: null },
    title: 'Játékfejlesztési mellékprojekt',
    description: 'Prototípus étterem-menedzsment játék Unity-ben.',
    techs: ['Unity', 'C#', 'Blender'],
    label: 'Mellékprojekt'
  }
]

const dataConf = reactive([])

const generateCommitHash = () => {
  const chars = '0123456789abcdef'
  let hash = ''
  for (let i = 0; i < 7; i++) {
    hash += chars[Math.floor(Math.random() * chars.length)]
  }
  return hash
}

const createDataConf = () => {
  const cb = (commit, branch) => {
    return { ...commit, branch: branch}
  }

  const work = [...workCommits.map(c => cb(c, 'work'))]
  const uni = [...uniCommits.map(c => cb(c, 'uni'))]
  const personal = [...personalCommits.map(c => cb(c, 'personal'))]
  dataConf.push(...[...work, ...uni, ...personal])
}

const setupCommits = () => {
  createDataConf()
  dataConf.sort((a, b) => {
    return b.date.start - a.date.start
  })
}

watchEffect(() => {
  dataConf.map((conf) => {
    Object.assign(conf, {
      ...conf,
      displayDate: formatDate(conf.date.start),
      id: generateCommitHash(),
    })
  })
})

onMounted(() => setupCommits())

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
