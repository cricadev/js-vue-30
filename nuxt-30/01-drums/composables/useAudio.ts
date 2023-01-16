import key01 from "../assets/sounds/key01.mp3";
import key02 from "../assets/sounds/key02.mp3";

export const sfx = reactive({
  key01: new Audio(key01),
  key02: new Audio(key02),
});
export const useSfx = () => {
  const sounds = sfx;
  return { sounds };
};
