<template>
  <div :style="containerStyle">
    <q-btn
      v-for="btn in buttonsConf"
      :key="btn"
      round flat

      :icon="btn.icon"
      @click="btn.action"
    />
  </div>
</template>

<script setup>
import {copyToClipboard, Notify} from "quasar";
import {computed, reactive} from "vue";

const props = defineProps(['direction'])

const conf = reactive({
  dir: props.direction || 'column',
})

const containerStyle = computed(() => ({
  display: 'flex',
  flexDirection: conf.dir
}))

const buttonsConf = [
  {
    icon: "mdi-github",
    action: () => openRedirectLink("https://github.com/DezsiCsaba/portfolio-weboldal")
  },
  {
    icon: "mdi-linkedin",
    action: () => openRedirectLink("https://www.linkedin.com/in/dézsi-csaba-370a33188/")
  },
  // {
  //   icon: "mdi-file-pdf-box",
  //   action: () => openRedirectLink("https://github.com/DezsiCsaba") // TODO - önéletrajz letöltése
  // },
  {
    icon: "mdi-gmail",
    action: () => copyEmailToClipboard()
  }
]

const openRedirectLink = (path) => {
  const link = document.createElement('a')
  link.target = '_blank'
  link.href = path
  document.body.appendChild(link)
  link.click()
  setTimeout(()=>{
    document.body.removeChild(link)
  },1000)
}

const copyEmailToClipboard = () => {
  copyToClipboard('csabeszq2001@gmail.com')
    .then(()=>{
      Notify.create({
        message: 'Email cím a vágólapra másolva',
        color: "primary"
      })
    })
}
</script>

