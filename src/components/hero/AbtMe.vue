<template>
  <div class="container-div">
    <div
      style="width: 75%"
      class="q-pa-md"
    >
      <div class="text-uppercase text-h2">Rólam</div>

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
  'Középiskolában találkoztam először komolyabban az informatikával. Eleinte a videojátékok és kisebb programozási próbálkozások\n' +
  ' keltették fel az érdeklődésemet, ami végül az Óbudai Egyetem mérnökinformatikus szakára vezetett, ahol tovább\n' +
  ' mélyítettem tudásom a programozásban és a mesterséges intelligencia iránti kíváncsiságomban.',

  '2022-ben kezdtem szakmai pályafutásomat az Antenna Hungáriánál gyakornokként. Először tesztelési és támogatási\n' +
  ' feladatokkal foglalkoztam, majd fokozatosan a webfejlesztés felé fordultam. Junior full-stack fejlesztőként több\n' +
  ' belső projektben, például a Mikrobi2-ben és más webes alkalmazásokban vettem részt, erősítve JavaScript, Node.js\n' +
  ' és modern framework-ök terén szerzett tapasztalataimat.',

  'Egyetemi tanulmányaim során egyre inkább a mesterséges intelligencia felé fordultam. Részt vettem több csapatprojektben,\n' +
  ' az image processingtől a nagy nyelvi modellekig és kísérleti optimalizációs kutatásokig. Legutóbbi félévemben egy\n' +
  ' TDK-projekt társszerzője voltam, amely az LLM-ek rákkezelésben való alkalmazását vizsgálta. A munka várhatóan\n' +
  ' megjelenik a CINTI 2025 (IEEE International Symposium on Computational Intelligence and Informatics) konferencián.',

  'Jelenleg leginkább a webfejlesztés és a mesterséges intelligencia metszetében rejlő lehetőségek érdekelnek, és\n' +
  ' szeretek praktikus, moduláris megoldásokat készíteni: belső dashboardokat, full-stack alkalmazásokat vagy\n' +
  ' kutatási prototípusokat.'
]

</script>
