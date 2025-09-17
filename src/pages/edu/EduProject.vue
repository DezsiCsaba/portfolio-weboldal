<template>
  <div>  <!--ez csak amiatt kell, h kívülről tudjam manipulálni a dolgokat és legyen egy outer containerünk-->
    <div class="project-grid">
      <q-card class="project-card flex-spacing" flat bordered>
        <div
          class="project-card-header"
          :style="headerStyle"
        >
          <div class="img-overlay"/>
        </div>

        <div style="height: 60%" class="flex-spacing q-px-md q-pb-md">
          <div class="text-h5 text-primary text-bold">{{conf.title}}</div>
          <div class="text-subtitle2">{{conf.description}}</div>

          <div>
            <q-btn
              icon-right="keyboard_arrow_right"
              color="primary" flat
              label="Megnézem"
              @click="takeToProject"
            />
          </div>
        </div>
      </q-card>


      <div class="project-techs">
        <div :class="chipContainerClasses">
<!--          <div>Szerepeim</div>-->
          <ChipLink
            v-for="role in conf.roles" :key="role"
            :label="role"
          />
        </div>

        <div :class="chipContainerClasses">
<!--          <div>Skillek</div>-->
           <ChipLink
            v-for="tech in conf.techs" :key="tech"
            :label="tech"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, reactive} from "vue";
import {useRouter} from "vue-router";
import ChipLink from "components/ChipLink.vue";

const props = defineProps(['title', 'imageSrc', 'description', 'techs', 'roles'])
const router = useRouter()

const chipContainerClasses = 'flex row items-center q-my-sm q-pa-sm'
const conf = reactive({
  title: props.title || '',
  imgSrc: props.imageSrc || '',
  description: props.description || '',
  techs: props.techs || [],
  roles: props.roles || []
})

const headerStyle = computed(() => ({
  backgroundImage: conf.imgSrc ? `url(${conf.imgSrc})` : 'none',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}))

const takeToProject = () => {
  router.replace('/work')
}
</script>

<style lang="scss" scoped>
@import '../../css/styling';

.project-card {
  width: 300px;
  height: 400px;

  z-index: 5;
  grid-area: 1 / 6 / 2 / 1;
}

.img-overlay {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  background: $dark-bg-gradient;
}

.flex-spacing {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-card-header {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  position: relative;
}

.project-card-header::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 0;
  border-right: 300px solid transparent; /* span full width */
  border-bottom: 30px solid white;      /* slope height and color */
  z-index: 2;
}

.project-grid{
  position: relative;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(10, 1fr);
  -webkit-box-align: center;
  align-items: center;
}

.project-techs {
  min-height: 100px;

  z-index: 10;
  grid-area: 1 / 4 / -1 / -1;
  background: $dark-bg-gradient;
  //box-shadow: 0 10px 10px -10px var(--navy-shadow);
  //border: 1px solid transparent;
  border-radius: var(--border-radius);
}
</style>
