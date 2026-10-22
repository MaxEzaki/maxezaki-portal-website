import { Character } from "../types/index.d";
import maxIndex from "../../public/max_index.jpeg";
import maxStockphoto from "../../public/max_stockphoto.jpeg";
import maxMc from "../../public/max_mc.jpeg";
import maxEngineer from "../../public/max_engineer.jpeg";
import maxTeacher from "../../public/max_teacher.jpeg";
import maxPercussionist from "../../public/max_percussionist.jpeg";
import maxActor from "../../public/max_actor.jpeg";
import max404 from "../../public/max_404.jpeg";

export const characters: Character[] = [
  {
    name: "Max_Ezaki",
    image: {
      src: maxIndex,
      alt: "Max_Ezaki Index",
    },
    description: `現役ドイツ人ハーフのマックスさんです。\n好きな食べ物はビールです。`,
    type: "index",
  },
  {
    name: "Max_Ezaki",
    image: {
      src: maxStockphoto,
      alt: "Max_Ezaki StockPhoto Model",
    },
    description: `<a href="https://www.pakutaso.com/Max_Ezaki.html" target="_blank">ぱくたそ</a>という日本一のフリー素材サイトでフリー素材モデルやってます。使ってくれたら喜びます。`,
    type: "stockphoto",
  },
  {
    name: "Max_Ezaki",
    image: {
      src: maxMc,
      alt: "Max_Ezaki MC",
    },
    description: `イベント司会、結婚式司会（日英含む）などたまにやってます。台本は必須アイテム。あとビール。`,
    type: "mc",
  },
  {
    name: "Max_Ezaki",
    image: {
      src: maxEngineer,
      alt: "Max_Ezaki Engineer",
    },
    description: `一応ITエンジニアやってます。PHP, Vue, Typescript あたりでしょうか。React はお触り中です。`,
    type: "engineer",
  },
  {
    name: "Max_Ezaki",
    image: {
      src: maxTeacher,
      alt: "Max_Ezaki Teacher",
    },
    description: `中学生メインで数学と理科を教えてました（英語ではない）。集団、個別どちらも対応可能。最後はイギリスで教えてました。`,
    type: "teacher",
  },
  {
    name: "Max_Ezaki",
    image: {
      src: maxPercussionist,
      alt: "Max_Ezaki Percussionist",
    },
    description: `<a href="https://bommer.me" target="_blank">BOMmER</a>というバンドで太鼓叩いてます。荷物量エグいんでライブのときはタクシー絶対。`,
    type: "percussionist",
  },
  {
    name: "Max_Ezaki",
    image: {
      src: maxActor,
      alt: "Max_Ezaki Actor",
    },
    description: `動画もいけます。<a href="/movie">こちら</a>よりご視聴ください。</br><a href="https://soundcloud.com/max-ezaki/sets/voice-sample-from-trailer-movie-remind?si=9a77e471d4bc4c77ae56485e12b9a471&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" target="_blank">ボイスサンプル</a>もあります`,
    type: "actor",
  },
  {
    name: "404 Not Found!!",
    image: {
      src: max404,
      alt: "404 Not Found",
    },
    description: `残念！お探しのページはありませんね。`,
    type: "404",
  },
];
