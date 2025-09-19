<!--TODO - grafika használata, h ne egy unalmas szövegekkel tűzdelt rész legyyen-->

<template>
  <div class="container-div">
    <div
      :style="props.innerContainerStyles"
      :class="props.innerContainerClasses"
    >
      <div class="text-uppercase text-h2">Érdeklődési köreim</div>

      <div
        v-for="par in interests"
        :key="par"
        class="q-my-lg"
      >
        {{par}}
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({name: 'MyInterests'})

const props = defineProps(['innerContainerClasses', 'innerContainerStyles'])

const interests = [
  'Szabadidőmben gyakran játszom videojátékokkal. A Counter-Strike 2 a kompetitív játékmenet és a csapatmunka miatt,\n' +
  ' az Euro Truck Simulator 2 a nyugodtabb, kikapcsolódós élményért, míg az F1-játékok a Formula 1 iránti rajongásom\n' +
  ' és a szimulációs élmény miatt tartoznak a kedvenceim közé.',

  'A filmek és sorozatok terén főként a Marvel-univerzum (különösen az Avengers: Endgame-ig), valamint a Star Wars\n' +
  ' eredeti hat epizódja és a The Clone Wars sorozat állnak közel hozzám.',

  'Szenvedélyem a Formula 1 követése is, főként a versenyzés izgalma és a sportág technikai háttere miatt.',

  'Emellett szeretek saját programozási projekteken dolgozni. Foglalkoztam már játékfejlesztéssel, valamint kisebb\n' +
  ' mellékprojektekkel, például egy Google Drive tárolási API és webalkalmazás készítésével, vagy egy saját fejlesztésű\n' +
  ' munkaidő-naplózó alkalmazással, amely segít átlátni a teljesítményemet és visszakeresni az elvégzett feladataimat.'
]

</script>

<style scoped lang="scss">

</style>
