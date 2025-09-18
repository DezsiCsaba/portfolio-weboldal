<template>
  <q-page>
    <PageHeader
      title="Tanulmányaim"
      subtitle="Gimnáziumi évek és egyetemi projektjeim"
      icon="school"
      img-src="imgs/workstation.jpg"
    />

    <div class="q-pa-xl flex flex-center">
      <EduTemplate
        institute="Óbudai Egyetem, Neumann János Informatikai kar"
        insitute-url="https://nik.uni-obuda.hu"
        :datas="oeDatas"
        :projects="projects"
      />

<!--      <HorizontalContainerWithImg-->
<!--        title="Egyetem"-->
<!--        image-src="imgs/illustrations/undraw_wip.svg"-->
<!--      >-->
<!--        <template v-slot:default>-->
<!--          <EduTemplate-->
<!--            institute="Óbudai Egyetem, Neumann János Informatikai kar"-->
<!--            insitute-url="https://nik.uni-obuda.hu"-->
<!--            :datas="oeDatas"-->
<!--            :projects="projects"-->
<!--          />-->
<!--        </template>-->
<!--      </HorizontalContainerWithImg>-->



<!--      <HorizontalContainerWithImg-->
<!--        title="Gimnázium"-->
<!--        image-src="imgs/illustrations/undraw_study.svg"-->
<!--      >-->
<!--        <template v-slot:default>-->
<!--          <EduTemplate-->
<!--            institute="Budapest XIII. kerületi Ady Endre 6 osztályos gimnázium"-->
<!--            insitute-url="https://www.adygimnazium.eu"-->
<!--            :datas="gimiDatas"-->
<!--          />-->
<!--        </template>-->
<!--      </HorizontalContainerWithImg>-->
    </div>


  </q-page>
</template>

<script setup>
import PageHeader from "components/layout/PageHeader.vue";
import EduTemplate from "components/edu/EduTemplate.vue";

const oeDatas = {
  'Alap ismeretek': [
    'Mérnökinformatikai szakon tanulok, ahol az alap tanterv részeként számos területet érintettünk, de számomra a ' +
    ' szoftverfejlesztéshez kapcsolódó tárgyak bizonyultak a legérdekesebbnek.',
    'Ezek során ismerkedtem meg a C# programozási nyelvvel és az objektumorientált programozás alapelveivel,' +
    ' amelyeket később több területen is sikeresen alkalmaztam egyetemi alap-és szakirányú tárgyakban, valamint gyakornoki munkám során.'
  ],
  'Mesterséges intelligencia szakirány': [
    'Az AI szakirányon tovább mélyítettem Python-ismereteimet, és betekintést nyertem a mesterséges intelligencia több irányzatába.',
    'Ide tartoznak például a neurális hálózatok, a gépi tanulás és az orvosi képfeldolgozás.'
  ],
  'Projektmunka': [
    'A szakirány sajátossága, hogy a négy féléven átívelő projektmunkát csoportosan kellett elkészítenünk,' +
    ' ami jelentősen fejlesztette a csapatmunkában való jártasságomat.'
  ],
  'Szakdolgozat': [
    'Szerencsére engedélyt kaptunk Dékán úrtól a közös szakdolgozat készítésre, így a saját munkám egy nagyobb projekt része lehetett.',
    'Feladataim közé tartozott egy Python Flask szerver fejlesztése, valamint egy mesterséges intelligencia megoldás létrehozása, amely egy egyetemi jegyzetből (PDF dokumentumból) tanulókártyákat generált.'
  ],
  'Szakmai gyakorlat': [
    'Szakmai gyakorlatomat az Antenna Hungáriánál teljesítettem, ahol web-és szerverfejlesztéssel foglalkoztam.',
    'Kezdetben egyetlen projektben dolgoztam fejlesztőként, később azonban több nagyobb projekt fejlesztésében és üzemeltetésében is részt vettem.',
    'Ezen felül egy jövőbeli projekt technológiai demójának elkészítésében is közreműködtem.'
  ]
}

const projects = [
  {
    title: 'Szakdolgozat',
    img: 'imgs/projects/matekKiszures.PNG',
    description: 'Flask szerver fejlesztése és AI megoldás tanulókártyák generálására',
    roles: ['Back-End Fejlesztő', 'Front-End Fejlesztő', 'Tesztelő', 'Machine Learning Engineer'],
    techs: ['Python', 'JavaScript', 'Vue', 'Quasar'],
  }, {
    title: 'Projektmunka',
    img: 'imgs/workstation.jpg',
    description: 'Nyomtatott és írott szövegek LaTex formátumba való kovertálása',
    roles:['Back-End Fejlesztő', 'Data Engineer', 'Machine Learning Engineer', 'Szoftver Fejlesztő'],
    techs:['Python', 'PyTorch', 'Pandas', 'C#', 'maui', 'cv2'],
  }
]

// const gimiDatas = {
//   'Nyelvi tanulmányok': [
//     'C1-es komplex angol nyelvvizsga',
//     'Emelt szintű angol nyelvvizsga'
//   ],
//   'Informatika': [
//     'Programozói fakultatív órákra jártam 11. és 12. osztályban',
//     'Emelt szintű informatika érettségit tettem tanulmányaim végén',
//
//     'Ezekben az években kezdte igazán felkelteni az érdeklődésemet az informatika világa.\n' +
//     ' Az érettségi évében már a programozás került a középpontba. Ekkorra ismerkedtem meg a Python és a C# nyelvekkel,\n' +
//     ' és biztosan tudtam, hogy ez az irány az, ami igazán vonz'
//   ]
// }
</script>
