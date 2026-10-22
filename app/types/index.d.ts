import type { StaticImageData } from "next/image";

export interface Interview {
  id: number;
  image: string;
  title: string;
  link: string;
  /** リンク先が存在しなくなった記事は true にして一覧から除外する */
  hidden?: boolean;
}

export interface Movie {
  id: number;
  embed: string;
}

export interface Character {
  name: string;
  image: {
    /** public/ からの静的インポート。next/image が寸法と blur を自動生成する */
    src: StaticImageData;
    alt: string;
  };
  description: string;
  type: string;
}
