import Tracks from "./img/tracks.png";
import Forkify from "./img/forkify.png";
import Gpt3 from "./img/gpt3.png";
import codeNail from "./img/code-nail.png";
import Tasuku from "./img/tasuku.png";
import Natours from "./img/natours.png";

const randomId = () => crypto.randomUUID();

export const products = [
  {
    id: randomId(),
    img: Natours,
    link: "https://natours-yhf.herokuapp.com/",
  },
  {
    id: randomId(),
    img: codeNail,
    link: "https://www.npmjs.com/package/codenail",
  },
  {
    id: randomId(),
    img: Tasuku,
    link: "https://tasuku.vercel.app/",
  },
  {
    id: randomId(),
    img: Forkify,
    link: "https://forkify-yhf.netlify.app/",
  },
  {
    id: randomId(),
    img: Gpt3,
    link: "https://gpt3-lovat.vercel.app/",
  },
  {
    id: randomId(),
    img: Tracks,
    link: "https://tracks-xi.vercel.app/",
  },
];
