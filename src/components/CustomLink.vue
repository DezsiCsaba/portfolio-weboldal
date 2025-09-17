<template>
  <div
    class="custom-site-link"
    @click="openRedirectLink"
  >{{conf.text}}</div>
</template>

<script setup>

import {reactive} from "vue";

const props = defineProps(['text', 'link'])

const conf = reactive({
  text: props.text || '',
  link: props.link || ''
})

const openRedirectLink = () => {
  const link = document.createElement('a')
  link.target = '_blank'
  link.href = conf.link
  document.body.appendChild(link)
  link.click()
  setTimeout(()=>{
    document.body.removeChild(link)
  },1000)
}
</script>
