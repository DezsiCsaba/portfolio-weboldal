<template>
  <div class="autumn-bg"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

let interval

function createLeaf() {
  const leaf = document.createElement('div')
  leaf.classList.add('leaf')

  // append to container
  const container = document.querySelector('.autumn-bg')
  if (!container) return

  container.appendChild(leaf)
  void leaf.offsetWidth // force reflow

  const leafModules = import.meta.glob('/public/theme/fall/leafes/*.svg', { eager: true, import: 'default' })
  const leafTypes = Object.values(leafModules)

  // pick a random leaf SVG
  const bgUrl = leafTypes[Math.floor(Math.random() * leafTypes.length)]
  leaf.style.backgroundImage = `url(${bgUrl})`

  // random horizontal start
  leaf.style.left = Math.random() * window.innerWidth + 'px'

  // random size
  const size = 20 + Math.random() * 40 // 20px - 60px
  leaf.style.width = `${size}px`
  leaf.style.height = `${size}px`

  // random duration for fall + sway
  const fallDuration = 5 + Math.random() * 5 // 5s - 10s
  const swayDuration = 3 + Math.random() * 2 // 3s - 5s
  leaf.style.animationDuration = `${fallDuration}s, ${swayDuration}s`

  // remove leaf after animation
  setTimeout(() => leaf.remove(), fallDuration * 1000)
}

onMounted(() => {
  interval = setInterval(createLeaf, 500)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

<style lang="scss">
@import '../../css/app';
.autumn-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  overflow: hidden;
  z-index: $z-idx-containers;
}

.leaf {
  position: absolute;
  top: -60px;
  left: 50px;
  width: 40px;
  height: 40px;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.8;
  pointer-events: none;
  will-change: transform;
  z-index: $z-idx-anim;
  animation: fall-sway 3s linear forwards;
}


@keyframes fall-sway {
  0%   { transform: translateX(0) translateY(0) rotate(0deg); }
  25%  { transform: translateX(20px) translateY(25vh) rotate(90deg); }
  50%  { transform: translateX(-15px) translateY(50vh) rotate(180deg); }
  75%  { transform: translateX(10px) translateY(75vh) rotate(270deg); }
  100% { transform: translateX(0px) translateY(100vh) rotate(360deg); }
}
</style>
