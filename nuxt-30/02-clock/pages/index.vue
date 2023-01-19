<template>
  <div>
    <Title>Pomodoro</Title>
    <ColorModePicker />

    <h1 class="text-3xl font-bold text-center text-intro">Pomodoro Timer</h1>
    <label for="clock-select">Select your type of clock</label>
    <select
      name="clock_type"
      class="select-clock"
      id="clock-select"
      v-model="clock"
    >
      <option value="pomodoro">Pomodoro</option>
      <option value="short">Short Break</option>
      <option value="long">Long Break</option>
      <option value="analog">Analog</option>
      <option value="digital">Digital</option>
    </select>
    <div class="clock" v-if="clock === 'analog'">
      <div class="clock-face"></div>
      <div class="hand hour-hand"></div>
      <div class="hand min-hand"></div>
      <div class="hand second-hand"></div>
    </div>
    <div class="clock" v-if="clock === 'digital'">
      <div class="clock-face">
        <div class="hourText"></div>
      </div>
    </div>
    <div class="clock" v-if="clock === 'pomodoro'">
      <p class="hour-text">
        {{ minutes }} :
        {{ seconds < 10 ? `0${seconds}` : seconds }}
      </p>
      <div class="flex items-center gap-2">
        <button @click="audioPlay" class="btn" v-if="!isRunning">
          <Icon name="material-symbols:play-arrow" class="icon-btn" />
        </button>
        <button @click="audioPause" class="btn" v-else>
          <Icon name="material-symbols:pause-outline" class="icon-btn"></Icon>
        </button>
        <button @click="audioStop" class="btn">
          <Icon name="material-symbols:stop" class="icon-btn"></Icon>
        </button>
      </div>
    </div>
    <div class="clock" v-if="clock === 'short'">
      <div class="clock-face">
        <div class="hourText">5:00</div>
      </div>
    </div>
    <div class="clock" v-if="clock === 'long'">
      <div class="clock-face">
        <div class="hourText">15:00</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import play from "../assets/sounds/play.mp3";
import pause from "../assets/sounds/pause.mp3";
import stopp from "../assets/sounds/stop.mp3";
const clock = ref("pomodoro");
const colorMode = useColorMode();
const { minutes, seconds, isRunning, startTimer, stopTimer, pauseTimer } =
  useTimer(25, 0);

const audioPlay = () => {
  const audio = new Audio(play);
  if (!isRunning.value) {
    audio.play();
  }
  startTimer();
};
const audioPause = () => {
  const audio = new Audio(pause);
  if (isRunning.value) {
    audio.play();
  }
  pauseTimer();
};
const audioStop = () => {
  const audio = new Audio(stopp);
  if (isRunning.value) {
    audio.play();
  }
  stopTimer();
};
</script>

<style scoped lang="scss">
html {
  background: #018ded;
  background-size: cover;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  font-size: 10px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.clock {
  display: grid;
  place-items: center;
  width: 30rem;
  height: 30rem;
  border-radius: 50%;
  border: 20px solid white;
  margin: 10rem auto;
  position: relative;
  box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1), inset 0 0 0 3px #efefef,
    inset 0 0 10px black, 0 0 10px rgba(0, 0, 0, 0.2);
}
.clock-face {
  position: relative;
  width: 100%;
  height: 100%;
  transform: translateY(-3px); /*accountfor the height of the clock hands*/
}

.hand {
  width: 50%;
  height: 6px;
  background: black;
  position: absolute;
  top: 50%;

  transform-origin: 100%;
  transform: rotate(90deg);
  transition: all 0.05s;
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
}

.second-hand {
  height: 3px;
  background: red;
}
.hour-hand {
  height: 8px;
}
.min-hand {
  height: 8px;
}
</style>
