<template>
  <q-chip
    class="badge"
    :class="conf.isStrong ? 'badge-strong' : 'badge-weak'"
  >{{ props.label }}</q-chip>
</template>

<script setup>
import {reactive} from "vue";

const props = defineProps(['label', 'isStrong'])

const conf = reactive(({
  label: props.label || '',
  isStrong: props.isStrong ?? true
}))
</script>

<style lang="scss" scoped>
@import '../css/quasar-variables';


.badge {
  padding: 0.3rem 0.6rem;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  white-space: nowrap;
}
.badge-strong {
  background: rgba($q-primary, 0.8);
  border: 1px solid rgba($q-accent, 0.9);
  color: white;
}
.badge-weak {
  background: rgba($q-primary, 0.15);
  border: 1px solid rgba($q-accent, 0.4);
}
</style>
