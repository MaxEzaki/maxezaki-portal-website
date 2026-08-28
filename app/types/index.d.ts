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
    src: string;
    alt: string;
    blurDataURL?: string;
  };
  description: string;
  type: string;
}
