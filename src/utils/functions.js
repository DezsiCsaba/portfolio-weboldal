import {onMounted, onUnmounted, ref} from "vue";
import {useGlobalStore} from "stores/globalStore.js";
import dayjs from "dayjs";

const isLog = true
const globalStore = useGlobalStore()

export async function sleep(ms = 1000) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function introduceOffsetToTimer(ms, offsetPercent = 25) {
  const maxOffset = ms * (offsetPercent / 100)
  const randomOffset = Math.random() * 2 * maxOffset - maxOffset
  isLog && console.log(`introduceOffsetToTimer - original=${ms}, offset%=${offsetPercent}, result=${ms + randomOffset}`)
  return Math.floor(ms + randomOffset);
}

export async function autoType(refVar, text, interval = 100, intervalOffset = 40) {
  return new Promise((resolve) => {
    let i = 0

    const typeNextChar = () => {
      if (i < text.length) {
        refVar.value = text.slice(0, i + 1)
        i++
        // Schedule next character with random offset
        setTimeout(typeNextChar, introduceOffsetToTimer(interval, intervalOffset))
      }
      else {
        resolve()
      }
    }

    typeNextChar() // start typing
  })
}

export function isPastLandingPage(router) {
  return router.currentRoute.value.fullPath !== '/'
}

/**
 * Tracks window's scrollY and provides a reactive value
 * @returns {{scrollY: Ref<UnwrapRef<number|number>, UnwrapRef<number|number> | number | number>}}
 */
export function useScroll() {
  const scrollY = ref(window.scrollY)

  const handleScroll = () => {
    scrollY.value = window.scrollY
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return { scrollY }
}

export function showProfileHeader() {
  globalStore.$state.showProfileNameInHeader = true
}

export function hideProfileHeader() {
  globalStore.$state.showProfileNameInHeader = false
}

export function formatDate(date = new Date(), format = 'YYYY-MMM-DD') {
  return dayjs(date).format(format)
}
