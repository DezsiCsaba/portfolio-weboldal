<template>
  <div class="container-div">
    <div
      style="width: 75%"
      class="q-pa-md"
    >
      <div class="text-uppercase">Rólam</div>

      <div
        v-for="par in abtMeStrs"
        :key="par"
        class="q-my-lg"
      >
        {{par}}
      </div>
    </div>
  </div>
</template>

<script setup>
const abtMeStrs = [
  'Középiskolában találkoztam először az informatikával komolyabban. A videojátékok és kisebb programozási kísérletek\n' +
  ' ébresztették fel az érdeklődésemet. Ez az érdeklődés egyre erősebbé vált, így mérnökinformatikus szakra jelentkeztem\n' +
  ' az Óbudai Egyetemre, ahol az egyetemi előadások és az önálló tanulás révén még jobban elmélyültem a programozásban\n' +
  ' és a mesterséges intelligencia iránti kíváncsiságomban.',

  '2022-ben kezdtem szakmai pályafutásomat az Antenna Hungáriánál gyakornokként. Az első időszakban teszteléssel és\n' +
  ' támogatási feladatokkal foglalkoztam, majd fokozatosan átkerültem a webfejlesztés területére. Itt junior full-stack\n' +
  ' fejlesztőként vettem részt belső projektekben, például a Mikrobi2-ben, illetve később más webes alkalmazásokban is.\n' +
  ' Ezek a projektek segítettek abban, hogy elmélyítsem a JavaScript, a Node.js és a modern framework-ök terén szerzett\n' +
  ' tapasztalataimat.',

  'Az egyetemi tanulmányaim mellett egyre inkább a mesterséges intelligencia felé fordultam. Több csapatprojektben is\n' +
  ' dolgoztam, amelyek az image processingtől kezdve a nagy nyelvi modelleken át egészen a kísérleti optimalizációs\n' +
  ' kutatásokig terjedtek. Legutóbbi félévemben egy TDK-projekt társszerzője voltam, amely az LLM-ek rákkezelésben való\n' +
  ' alkalmazását vizsgálta többcélú optimalizálási problémákban. A munka várhatóan megjelenik a CINTI 2025 (IEEE\n' +
  ' International Symposium on Computational Intelligence and Informatics) konferencián.',

  'Ma leginkább a webfejlesztés és a mesterséges intelligencia metszetében rejlő lehetőségek érdekelnek, és szeretek\n' +
  ' olyan praktikus, moduláris megoldásokat készíteni, amelyek lehetnek belső dashboardok, full-stack alkalmazások\n' +
  ' vagy akár kutatási prototípusok is.'
]

</script>
