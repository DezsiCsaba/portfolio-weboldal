<template>
  <q-page>
    <PageHeader
      title="Pályafutásom"
      subtitle="Az összes nagyobb projekt amin dolgoztam"
      icon="engineering"
      img-src="imgs/coding.jpg"
      secondary-img-src="imgs/illustrations/undraw_coding.svg"
      :show-waves="true"
    />

    <ListOfProjects :data="dataConf.filter(el => el.branch === 'work')"/>
    <ListOfProjects :data="dataConf.filter(el => el.branch === 'uni')"/>

  </q-page>
</template>

<script setup>
import PageHeader from "components/layout/PageHeader.vue";
import ListOfProjects from "components/project/List.vue";
import {onMounted, reactive, watchEffect} from "vue";
import {formatDate} from "src/utils/functions.js";

defineOptions({name: 'ProjectList'})


const workCommits = [
  // {
  //   date: { start: new Date('2022-09-01'), end: new Date('2023-09-05') },
  //   title: 'Gyakornoki pozíció kezdete az Antenna Hungáriánál',
  //   description: 'Tesztelési és támogatási feladatok.',
  //   techs: ['Tesztelés', 'Támogatás'],
  //   label: 'Gyakornok'
  // }, {
  //   date: { start: new Date('2023-09-05'), end: new Date('2024-07-01') },
  //   title: 'Web és szerver fejlesztési teszt projektek',
  //   description: 'Éles rendszer fejlesztése és üzemeltetése.',
  //   techs: ['JavaScript', 'Node.js', 'Vue', 'Quasar', 'Sequelize', 'MySQL'],
  //   label: 'Gyakornok'
  // },
  {
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
  // {
  //   date: { start: new Date('2020-09-01'), end: null },
  //   title: 'Egyetem kezdete',
  //   description: 'Elkezdtem a mérnökinformatikus szakot az Óbudai Egyetemen',
  //   techs: ['C#', 'Java', 'Assembly'],
  //   label: 'TDK 2025'
  // }, {
  //   date: { start: new Date('2023-02-01'), end: new Date('2025-02-01') },
  //   title: 'Mesterséges Intelligencia szakirány',
  //   description: 'Elmélyedtem a mesterséges intelligencia területén',
  //   techs: ['Python', 'LLMek', 'Neurális hálók', 'Képfeldolgozás', 'Big Data', 'ROS 2'],
  //   label: 'TDK 2025'
  // },
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
      displayDate: `${formatDate(conf.date.start)} - ${formatDate(conf.date.end)}`,
      id: generateCommitHash(),
    })
  })
})

onMounted(() => setupCommits())

</script>


<style scoped lang="scss">

</style>
