<template>
  <div style="height: 100vh">
    <q-card style="width: 75vw; height: 75vh; padding: 10px" flat>
      <q-card-section class="row no-wrap" style="height: 100%">

        <div class="col-auto flex flex-center column" style="height: 100%">
          <div class="text-h4 q-mb-lg">{{conf.title}}</div>
          <img
            class="q-mt-lg"
            :src="conf.imageSrc"
            :alt="conf.imageAlt"
            style="max-height: 80%; max-width: 200px;"
          />
        </div>

        <q-separator vertical class="q-ma-md" />

        <div class="col flex column" style="height: 100%">
          <div class="q-pa-md fit flex column">
            <slot/>
          </div>
        </div>

      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import {reactive} from "vue";

const props = defineProps(['title', 'imageSrc'])

const conf = reactive({
  title: props.title || '',
  imageSrc: props.imageSrc || 'imgs/illustrations/undraw_wip.svg',
  imageAlt: props.title || 'sajnos nincs kép',
})
</script>
