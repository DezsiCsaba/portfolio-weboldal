<template>
  <div class="commit">
    <!-- left side: line + dot -->
    <div class="commit-visual">
      <div :class="['dot', conf.branch]"></div>
      <div class="line"></div>
    </div>

    <!-- right side: commit details -->
    <div class="commit-details">
      <div class="hash-date">
        <code>{{ conf.id }}</code>
        <span class="date">{{ conf.displayDate }}</span>
      </div>
      <div class="title">{{ conf.title }}</div>
      <div class="description">{{ conf.description }}</div>
      <div class="tags">
        <q-badge
          v-for="(t, idx) in conf.techs"
          :key="idx"
          color="primary"
          class="q-mr-sm"
        >{{ t }}</q-badge>
      </div>
    </div>
  </div>
</template>

<script setup>
import {formatDate} from "../../utils/functions.js";
import {reactive, watchEffect} from "vue";

const props = defineProps(['commit'])

const conf = reactive({...props.commit})

const generateCommitHash = () => {
  const chars = '0123456789abcdef'
  let hash = ''
  for (let i = 0; i < 7; i++) {
    hash += chars[Math.floor(Math.random() * chars.length)]
  }
  return hash
}

watchEffect(() => {
  Object.assign(conf, {
    ...conf,
    displayDate: formatDate(conf.date),
    id: generateCommitHash(),
  })
})

</script>

<style lang="scss" scoped>
@import '../../css/quasar-variables';

.commit {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.commit-visual {
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-bottom: 4px;
}
.dot.work { background: $q-primary }
.dot.uni { background: #26a69a; }
.dot.personal { background: #8e24aa; }

.line {
  flex-grow: 1;
  width: 2px;
  background: dimgray;
}

.commit-details {
  flex-grow: 1;
  padding-left: 1rem;
}

.hash-date {
  display: flex;
  align-items: center;
  font-family: monospace;
  font-size: 0.8rem;
  color: #555;
}
.hash-date .date {
  margin-left: 10px;
  font-size: 0.75rem;
  color: #888;
}

.title {
  font-weight: bold;
  margin-top: 4px;
}

.description {
  font-size: 0.9rem;
  margin: 4px 0;
}
</style>
