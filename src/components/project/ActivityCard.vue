<template>
  <div class="activity-card">
    <!-- Header -->
    <div class="header">
      <span class="label">{{ props.data.label }}</span>
      <span class="date">
        {{`${formatDate(props.data.date.start)} - ${formatDate(props.data.date.end)}`}}
      </span>
    </div>

    <!-- Title -->
    <h2 class="title">{{ props.data.title }}</h2>

    <!-- Description -->
    <p class="description">{{ props.data.description }}</p>

    <!-- Tech stack -->
    <div class="footer">
      <div>
        <ChipLink
          v-for="(tech, i) in props.data.techs"
          :key="i"
          :label="tech"
          :is-strong="false"
        />
      </div>

      <div class="btn-container">
        <q-btn
          flat
          label="Megnézem"
          icon-right="keyboard_arrow_right"
          color="primary"
          @click="takeToProject"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ChipLink from "components/ChipLink.vue";
import {useRouter} from "vue-router";
import {formatDate} from "../../utils/functions.js";

const router = useRouter()
const props = defineProps({
  data: { type: Object, required: true }
})


const takeToProject = () => {
  router.replace('/work')
}
</script>

<style scoped lang="scss">
@import '../../css/quasar-variables';

.activity-card {
  width: 100%;
  max-width: 600px;
  padding: 2rem;
  border-radius: 1rem;

  /* glass look */
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
    cursor: pointer;
  }

  .header {
    display: flex;
    justify-content: space-between;
    font-size: 0.85rem;
    opacity: 0.8;

    .label {
      font-weight: 600;
      color: $q-accent;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .date {
      font-family: monospace;
    }
  }

  .title {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 700;
    color: $q-primary;
  }

  .description {
    font-size: 1rem;
    line-height: 1.4;
    opacity: 0.9;
  }

  .techs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    .badge {
      background: rgba(79, 195, 247, 0.15);
      border: 1px solid rgba(79, 195, 247, 0.4);
      padding: 0.3rem 0.6rem;
      border-radius: 0.5rem;
      font-size: 0.8rem;
      white-space: nowrap;
    }
  }

  .footer {
    //border: 1px solid red; //debug
    display: grid;
    grid-template-columns: 2fr 1fr;
    //display: flex;
    //justify-content: space-between;
    //align-items: flex-end;

    .btn-container {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    }
  }
}
</style>
