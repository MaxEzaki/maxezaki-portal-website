export interface Interview {
  id: number;
  image: string;
  title: string;
  link: string;
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
