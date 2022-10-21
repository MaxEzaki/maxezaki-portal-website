import { useState, useEffect, HtmlHTMLAttributes } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { css } from 'linaria';
import { format } from 'date-fns';
import ContactButton from '../molecules/ContactButton';
import { hashtags } from '../../data/hashtags';
import { characters } from '../../data/characters';

const card = {
  wrapper: css`
    width: 470px;
    border: 1px solid var(--color-gray10);
    border-radius: 8px;
    background-color: #fff;
    margin: 3rem auto;
    @media (max-width: 414px) {
      border-radius: 0;
    }
  `,
  name: css`
    font-size: 1.3rem;
    padding-left: 1rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
  `,
  imageContainer: css`
    position: relative;
    width: 100%;
    height: 335px;
    border-top: 1px solid var(--color-gray10);
    border-bottom: 1px solid var(--color-gray10);
    margin-bottom: 1rem;
  `,
  content: {
    wrapper: css`
      padding-left: 1rem;
      padding-right: 1rem;
      border-bottom: 1px solid var(--color-gray10);
    `,
    description: css`
      padding-bottom: 0.3rem;
      white-space: pre-wrap;
      a,
      span {
        color: var(--color-blue);
        transition: all 0.4s;
        &:hover {
          cursor: pointer;
          opacity: 0.7;
        }
      }
    `,
  },
};

const tags = {
  wrapper: css`
    color: var(--color-blue);
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 1rem;
  `,
  text: css`
    margin-right: 0.6rem;
    transition: all 0.4s;
    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  `,
};

const time = css`
  color: var(--color-gray40);
  font-size: 0.8rem;
  padding-bottom: 1rem;
`;

const buttonWrapper = css`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = () => {
  const [filtredCharacter, setFiltredCharacter] = useState(characters);
  const handleCharacter = (value: string) => {
    value !== 'index'
      ? setFiltredCharacter(filterCharacter(value))
      : setFiltredCharacter(filterCharacter('index'));
  };
  const filterCharacter = (characterType: string) => {
    let filtredPokemon = characters.filter((e) => e.type === characterType);
    return filtredPokemon;
  };
  useEffect(() => {
    setFiltredCharacter(filterCharacter('index'));
  }, []);

  return (
    <div className={card.wrapper}>
      {filtredCharacter &&
        filtredCharacter.map((e, index) => (
          <div key={index}>
            <p className={card.name}>{e.name}</p>
            <div className={card.imageContainer}>
              <Image
                src={e.image.src}
                alt={e.image.alt}
                layout="fill"
                objectFit="cover"
                loading="eager"
              />
            </div>
            <div className={card.content.wrapper}>
              <p
                className={card.content.description}
                dangerouslySetInnerHTML={{ __html: e.description }}
              ></p>
              <div className={tags.wrapper}>
                {hashtags.map((e) => {
                  return (
                    <a
                      className={tags.text}
                      key={e.id}
                      onClick={() => handleCharacter(e.value)}
                    >
                      #{e.name}
                    </a>
                  );
                })}
              </div>
              <p className={time}>{format(new Date(), 'yyyy/MM/dd HH:mm')}</p>
            </div>
            <div className={buttonWrapper}>
              <ContactButton />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Card;
