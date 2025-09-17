<template>
  <q-page class="flex flex-center">
    <q-form>
      <q-card style="width: 500px" class="q-pa-md">
        <div class="text-uppercase flex flex-center" style="font-size: clamp(20px, 8vw, 40px)">Ki vagyok?</div>

        <q-card-section>
          <q-input
            :model-value="uname"
            outlined dense
            class="q-my-md"
            label="Felhasználónév"
          ></q-input>
          <q-input
            :model-value="pword"
            outlined dense
            class="q-my-md"
            label="Jelszó"
            :type="isPwdToggled ? 'password' : 'text'"
          >
            <template v-slot:append>
              <q-icon
                :color="isPwdToggled ? 'blue' : 'gray'"
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
            color="blue"
          >Bejelentkezés</q-btn>
        </q-card-section>
      </q-card>
    </q-form>
  </q-page>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {autoType, sleep} from "src/utils/functions.js";
import {useRouter} from "vue-router";

const uname = ref('')
const pword = ref('')
const isPwdToggled = ref(true)
const loginBtn = ref(null)

const router = useRouter()

const handleFakeBtnClick = () => {
  loginBtn.value.$el.click()

  router.push('/about')
}

const doFakeLogin = async () => {
  await sleep(1000)
  await autoType(uname, 'Dézsi Csaba István')
  await sleep()
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
