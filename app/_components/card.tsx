"use client";
import styles from "../_components/card.module.css";
import React, { useState } from "react";
import Image from "next/image";
import { format } from "date-fns";
import ContactButton from "./contact-button";
import { hashtags } from "../_data/hashtags";
import { characters } from "../_data/characters";
import Link from "next/link";
import parse, { domToReact } from "html-react-parser";

const Card = (props: { type?: string }) => {
  const filterCharacter = (characterType: string) => {
    return characters.filter((e) => e.type === characterType);
  };

  const [filtredCharacter, setFiltredCharacter] = useState(
    filterCharacter(!props.type ? "index" : "404")
  );

  const handleCharacter = (value: string) => {
    setFiltredCharacter(filterCharacter(value !== "index" ? value : "index"));
  };

  const replace = (node: any) => {
    if (node.name === "a") {
      return (
        <Link {...node.attribs} rel="noreferrer">
          {domToReact(node.children)}
        </Link>
      );
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        {filtredCharacter &&
          filtredCharacter.map((e, index) => (
            <div key={index}>
              <p className={styles.name}>{e.name}</p>
              <div className={styles.imageContainer}>
                <Image
                  src={e.image.src}
                  alt={e.image.alt}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  loading="eager"
                />
              </div>
              <div className={styles.content}>
                {/* <p
                  className={styles.description}
                  dangerouslySetInnerHTML={{ __html: e.description }}
                ></p> */}
                <p className={styles.description}>
                  {parse(e.description, { replace })}
                </p>
                <div className={styles.tags}>
                  {props.type != "404" ? (
                    hashtags.map((e) => {
                      return (
                        <a
                          className={styles.tagItem}
                          key={e.id}
                          onClick={() => handleCharacter(e.value)}
                        >
                          #{e.name}
                        </a>
                      );
                    })
                  ) : (
                    <Link href={""} onClick={() => handleCharacter("index")}>
                      トップページへ戻る &gt;&gt;
                    </Link>
                  )}
                </div>
                <p className={styles.time}>
                  {format(new Date(), "yyyy/MM/dd HH:mm")}
                </p>
              </div>
              <div className={"flex items-center justify-center py-6"}>
                <ContactButton />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Card;
