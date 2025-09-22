<template>
  <q-page class="flex flex-center">
    <div
      :style="loginBg"
      class="login-bg"
    >
      <div class="img-overlay dark-bg-gradient-strong"/>
    </div>

    <q-form class="login-form" ref="form">
      <q-card
        flat
        style="width: 500px"
        class="glass q-pa-md"
      >
        <div class="text-uppercase flex flex-center" style="font-size: clamp(20px, 8vw, 40px)">Ki vagyok?</div>

        <q-card-section>
          <q-input
            :model-value="uname"
            v-bind="inputConf"
            ref="unameInput"
            label="Felhasználónév"
          ></q-input>
          <q-input
            :model-value="pword"
            v-bind="inputConf"
            ref="pwInput"
            label="Jelszó"
            :type="isPwdToggled ? 'password' : 'text'"
          >
            <template v-slot:append>
              <q-icon
                :color="isPwdToggled ? 'primary' : 'gray'"
                :name="isPwdToggled ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwdToggled = !isPwdToggled"
              />
            </template>
          </q-input>
        </q-card-section>

        <q-card-section>
          <q-btn
            ref="loginBtn"
            class="full-width"
            :disable="isPwdToggled"
            color="primary"
          >Bejelentkezés</q-btn>
        </q-card-section>
      </q-card>
    </q-form>
  </q-page>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import {autoType, sleep} from "src/utils/functions.js";
import {useRouter} from "vue-router";

const uname = ref('')
const pword = ref('')
const isPwdToggled = ref(true)

//component refs
const loginBtn = ref(null)
const unameInput = ref(null)
const pwInput = ref(null)
const form = ref(null)

const router = useRouter()

const handleFakeBtnClick = () => {
  loginBtn.value.$el.click()

  router.push('/about')
}

const inputConf = {
  dark: true,
  color: 'white',
  'label-color': 'white',
  'text-color': 'white',
  dense: true,
  class: 'q-my-md login-input-class',
  'border-color': 'white',
  inputStyle: {
    color: 'white'
  }
}

const loginBg = computed(() => ({
  // TODO - add css background using svg's and maybe even animations
  // backgroundImage: 'url(imgs/workstation.jpg)',
  // backgroundSize: 'cover',
  // backgroundPosition: 'center',
  // backgroundRepeat: 'no-repeat'
}))

const doFakeLogin = async () => {
  await sleep(1000)
  unameInput.value.focus()
  await autoType(uname, 'Dézsi Csaba István')
  await sleep()
  pwInput.value.focus()
  await autoType(pword, 'Junior full-stack fejlesztő')
  await sleep(150)
  isPwdToggled.value = false
  await sleep(1500)
  handleFakeBtnClick()
}

onMounted(async () => {
  await doFakeLogin()
})
</script>

<style lang="scss" scoped>
@import '../../css/bg-styling';
@import '../../css/app';

.login-bg {
  position: absolute;

  width: 100%;
  height: 100%;
}

.login-form {
  z-index: $z-idx-content;
  color: white;
}

.login-card {
  background: $medium-bg-gradient-strong;
}

</style>
