<template>
  <div class="flex text-white bg-green-800">
    <div v-for="item in sound" :key="item.id">
      <button @click="item.key.play()" class="p-4 button">
        {{ item.letter }}
      </button>
    </div>
  </div>
</template>
<style lang="scss">
.button {
  &.playing {
    background: #ffc600;
    transform: scale(1.1);
    border-color: #ffc600;
    box-shadow: 0 0 1rem #ffc600;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  text-transform: uppercase;
  font-family: sans-serif;
  transition: all 0.07s ease;
  user-select: none;
  cursor: pointer;
  flex-basis: 1.5%;
  height: 100px;
  border: 1px solid black;
  box-sizing: border-box;
}
</style>
<script setup>
import { useSfx } from "../composables/useAudio";
const { sound } = useSfx();
onMounted(() => {
  const button = document.querySelectorAll(".button");
  window.addEventListener("keydown", (e) => {
    sound.forEach((item) => {
      if (e.key.toUpperCase() === item.letter) {
        if (!item.key) return;
        item.key.currentTime = 0;
        item.key.play();
        button.forEach((item) => {
          if (item.textContent == e.key.toUpperCase()) {
            item.classList.add("playing");
            setTimeout(() => {
              item.classList.remove("playing");
            }, 100);
          }
        });
      }
    });
  });
});
</script>
