import key01 from "../assets/sounds/key01.mp3";
import key02 from "../assets/sounds/key02.mp3";
import key03 from "../assets/sounds/key03.mp3";
import key04 from "../assets/sounds/key04.mp3";
import key05 from "../assets/sounds/key05.mp3";
import key06 from "../assets/sounds/key06.mp3";
import key07 from "../assets/sounds/key07.mp3";
import key08 from "../assets/sounds/key08.mp3";
import key09 from "../assets/sounds/key09.mp3";
import key10 from "../assets/sounds/key10.mp3";
import key11 from "../assets/sounds/key11.mp3";
import key12 from "../assets/sounds/key12.mp3";
import key13 from "../assets/sounds/key13.mp3";
import key14 from "../assets/sounds/key14.mp3";
import key15 from "../assets/sounds/key15.mp3";
import key16 from "../assets/sounds/key16.mp3";
import key17 from "../assets/sounds/key17.mp3";
import key18 from "../assets/sounds/key18.mp3";
import key19 from "../assets/sounds/key19.mp3";
import key20 from "../assets/sounds/key20.mp3";
import key21 from "../assets/sounds/key21.mp3";
import key22 from "../assets/sounds/key22.mp3";
import key23 from "../assets/sounds/key23.mp3";
import key24 from "../assets/sounds/key24.mp3";

export const sfx = reactive([
  {
    key: new Audio(key01),
    letter: "A",
  },
  {
    key: new Audio(key02),
    letter: "S",
  },
  {
    key: new Audio(key03),
    letter: "D",
  },
  {
    key: new Audio(key04),
    letter: "F",
  },
  {
    key: new Audio(key05),
    letter: "G",
  },
  {
    key: new Audio(key06),
    letter: "H",
  },
  {
    key: new Audio(key07),
    letter: "J",
  },
  {
    key: new Audio(key08),
    letter: "K",
  },
  {
    key: new Audio(key09),
    letter: "L",
  },
  {
    key: new Audio(key10),
    letter: "Z",
  },
  {
    key: new Audio(key11),
    letter: "X",
  },
  {
    key: new Audio(key12),
    letter: "C",
  },
  {
    key: new Audio(key13),
    letter: "V",
  },
  {
    key: new Audio(key14),
    letter: "B",
  },
  {
    key: new Audio(key15),
    letter: "N",
  },
  {
    key: new Audio(key16),
    letter: "M",
  },
  {
    key: new Audio(key17),
    letter: "Q",
  },
  {
    key: new Audio(key18),
    letter: "W",
  },
  {
    key: new Audio(key19),
    letter: "E",
  },
  {
    key: new Audio(key20),
    letter: "R",
  },
  {
    key: new Audio(key21),
    letter: "T",
  },
  {
    key: new Audio(key22),
    letter: "Y",
  },
  {
    key: new Audio(key23),
    letter: "U",
  },
  {
    key: new Audio(key24),
    letter: "I",
  },
]);

export const useSfx = () => {
  const sound = sfx;

  return { sound };
};
