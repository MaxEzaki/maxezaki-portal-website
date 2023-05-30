"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
// import { css, cx } from "linaria";
import { format } from "date-fns";
import ContactButton from "./contact-button";
import { hashtags } from "../../src/data/hashtags";
import { characters } from "../../src/data/characters";
import Link from "next/link";

// const card = {
//   wrapper: css`
//     width: 470px;
//     border: 1px solid var(--color-gray10);
//     border-radius: 8px;
//     background-color: #fff;
//     margin: 3rem auto;
//     @media (max-width: 414px) {
//       border-radius: 0;
//     }
//   `,
//   name: css`
//     font-size: 1.3rem;
//     padding-left: 1rem;
//     padding-top: 0.3rem;
//     padding-bottom: 0.3rem;
//   `,
//   imageContainer: css`
//     position: relative;
//     width: 100%;
//     height: 335px;
//     border-top: 1px solid var(--color-gray10);
//     border-bottom: 1px solid var(--color-gray10);
//     margin-bottom: 1rem;
//   `,
//   content: {
//     wrapper: css`
//       border-bottom: 1px solid var(--color-gray10);
//     `,
//     description: css`
//       padding-bottom: 0.3rem;
//       white-space: pre-wrap;
//       a,
//       span {
//         color: var(--color-blue);
//         transition: all 0.4s;
//         &:hover {
//           cursor: pointer;
//           opacity: 0.7;
//         }
//       }
//     `,
//   },
// };

// const tags = {
//   wrapper: css`
//     color: var(--color-blue);
//   `,
//   text: css`
//     transition: all 0.4s;
//     &:hover {
//       cursor: pointer;
//       opacity: 0.6;
//     }
//   `,
// };

// const time = css`
//   color: var(--color-gray40);
//   font-size: 0.8rem;
// `;

const Card = (props: { type?: string }) => {
  const [filtredCharacter, setFiltredCharacter] = useState(characters);
  const handleCharacter = (value: string) => {
    value !== "index"
      ? setFiltredCharacter(filterCharacter(value))
      : setFiltredCharacter(filterCharacter("index"));
  };
  const filterCharacter = (characterType: string) => {
    let filtredPokemon = characters.filter((e) => e.type === characterType);
    return filtredPokemon;
  };

  useEffect(() => {
    setFiltredCharacter(filterCharacter(!props.type ? "index" : "404"));
  }, [props.type]);

  return (
    <div>card is here </div>
    // <div className={card.wrapper}>
    //   {filtredCharacter &&
    //     filtredCharacter.map((e, index) => (
    //       <div key={index}>
    //         <p className={card.name}>{e.name}</p>
    //         <div className={card.imageContainer}>
    //           <Image
    //             src={e.image.src}
    //             alt={e.image.alt}
    //             fill
    //             style={{
    //               objectFit: "cover",
    //             }}
    //             loading="eager"
    //           />
    //         </div>
    //         <div className={cx(card.content.wrapper, "px-4")}>
    //           <p
    //             className={card.content.description}
    //             dangerouslySetInnerHTML={{ __html: e.description }}
    //           ></p>
    //           <div className={cx(tags.wrapper, "flex flex-wrap pb-4")}>
    //             {props.type != "404" ? (
    //               hashtags.map((e) => {
    //                 return (
    //                   <a
    //                     className={cx(tags.text, "mr-2")}
    //                     key={e.id}
    //                     onClick={() => handleCharacter(e.value)}
    //                   >
    //                     #{e.name}
    //                   </a>
    //                 );
    //               })
    //             ) : (
    //               <Link href={"/"}>トップページへ戻る &gt;&gt;</Link>
    //             )}
    //           </div>
    //           <p className={cx(time, "pb-4")}>
    //             {format(new Date(), "yyyy/MM/dd HH:mm")}
    //           </p>
    //         </div>
    //         <div className={cx("flex items-center justify-center py-6")}>
    //           <ContactButton />
    //         </div>
    //       </div>
    //     ))}
    // </div>
  );
};

export default Card;
