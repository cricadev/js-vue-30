import { SoundsPaths } from './.nuxt/sounds/index';
<template>
  <div class="flex bg-black">
    <div class="text-green-300 key">
      <ClientOnly>
        <div class=""></div>
      </ClientOnly>
    </div>
  </div>
</template>
<script setup>
import { useSound } from "./composables/useAudio.ts";
const { sounds } = useSound();
console.log(sounds);
</script>
