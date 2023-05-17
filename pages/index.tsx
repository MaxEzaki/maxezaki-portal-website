import { useState, useEffect, useLayoutEffect } from "react";
import type { NextPage } from "next";
import Card from "../src/components/Card";
import { css } from "linaria";
import { useRouter } from "next/router";

type CharacterType =
  | "index"
  | "stockphoto"
  | "mc"
  | "engineer"
  | "teacher"
  | "percussionist"
  | "actor";

const cardWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home: NextPage = () => {
  const router = useRouter();
  // Card 中身全てが一瞬チラつくため、擬似ローディング
  const [isLoading, setLoading] = useState(true);
  const isCharacterType = (value: CharacterType) => {
    [
      "index",
      "stockphoto",
      "mc",
      "engineer",
      "teacher",
      "percussionist",
      "actor",
    ].includes(value);
  };

  // const [qCharacterType, setQueryParam] = useState<CharacterType>("index");
  const qCharacterType = (router.query?.character || "index") as CharacterType;

  useEffect(() => {
    // console.log(
    //   "aaaa",
    //   [
    //     "index",
    //     "stockphoto",
    //     "mc",
    //     "engineer",
    //     "teacher",
    //     "percussionist",
    //     "actor",
    //   ].includes(qCharacterType)
    // );
    // if(isCharacterType(qCharacterType)) return;
    setLoading(false);
  }, [qCharacterType]);

  return (
    <div className={cardWrapper}>
      {!isLoading && <Card type={qCharacterType} />}
    </div>
  );
};

export default Home;
