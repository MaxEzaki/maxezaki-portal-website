import Link from 'next/link';
import Image from 'next/image';
import { css } from '@linaria/core';
import colors from '../../../config/colors';
import { format } from 'date-fns';
import ContactButton from '../molecules/ContactButton';

const card = {
  wrapper: css`
    width: 470px;
    border: 1px solid ${colors.gray10};
    border-radius: 8px;
    background-color: #fff;
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
    border-top: 1px solid ${colors.gray10};
    border-bottom: 1px solid ${colors.gray10};
    margin-bottom: 1rem;
  `,
  content: {
    wrapper: css`
      padding-left: 1rem;
      border-bottom: 1px solid ${colors.gray10};
    `,
    description: css`
      padding-bottom: 0.3rem;
      white-space: pre-wrap;
      a {
        color: ${colors.blue};
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
    color: ${colors.blue};
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
  color: ${colors.gray40};
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

const hashtags = [
  {
    id: 1,
    name: 'フリー素材',
    link: 'stockphoto',
  },
  {
    id: 2,
    name: '司会',
    link: 'mc',
  },
  {
    id: 3,
    name: 'ITエンジニア',
    link: 'engineer',
  },
  {
    id: 4,
    name: '塾講師',
    link: 'teacher',
  },
  {
    id: 4,
    name: 'パーカショニスト',
    link: 'percussionist',
  },
];

const Card = (props) => {
  const { name, image, description } = props.character;
  return (
    <div className={card.wrapper}>
      <div>
        <p className={card.name}>{name}</p>
        <div className={card.imageContainer}>
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={card.content.wrapper}>
          <p
            className={card.content.description}
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
          {/* <p className={card.content.description}>{description}</p> */}
          <div className={tags.wrapper}>
            {hashtags.map((e) => {
              return (
                <Link href={e.link} key={e.id}>
                  <a className={tags.text}>#{e.name}</a>
                </Link>
              );
            })}
          </div>
          <p className={time}>{format(new Date(), 'yyyy/MM/dd HH:mm')}</p>
        </div>
        <div className={buttonWrapper}>
          <ContactButton />
        </div>
      </div>
    </div>
  );
};

export default Card;
