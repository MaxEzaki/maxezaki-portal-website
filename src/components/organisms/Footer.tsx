import Link from 'next/link';
import Image from 'next/image';
import { css } from 'linaria';

const footer = {
  wrapper: css`
    height: 130px;
    background-color: var(--color-gray20);
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  icon: css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1rem;
    a {
      transition: all 0.4s;
      &:hover {
        cursor: pointer;
        opacity: 0.6;
      }
    }
  `,
};

const icon = [
  {
    id: 1,
    link: 'https://rhythm-onchi.com',
    alt: 'リズム音痴',
    name: '/icon-wordpress.svg',
  },
  {
    id: 2,
    link: 'https://twitter.com/Max_Ezaki',
    alt: 'Twitter',
    name: '/icon-twitter.svg',
  },
  {
    id: 3,
    link: 'https://www.instagram.com/max_ezaki/',
    alt: 'instagram',
    name: '/icon-instagram.svg',
  },
  {
    id: 4,
    link: 'https://maxezaki.photo',
    alt: 'tumblr',
    name: '/icon-tumblr.svg',
  },
  {
    id: 5,
    link: 'https://soundcloud.com/max-ezaki/sets/voice-sample-from-trailer-movie-remind?si=9a77e471d4bc4c77ae56485e12b9a471&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    alt: 'soundcloud',
    name: '/icon-soundcloud.svg',
  },
];

const Footer = ({}) => {
  return (
    <footer className={footer.wrapper}>
      <div>
        <div className={footer.icon}>
          {icon.map((e) => {
            return (
              <Link href={e.link} key={e.id}>
                <a target="_blank">
                  <Image src={e.name} alt={e.alt} width={36} height={36} />
                </a>
              </Link>
            );
          })}
        </div>
        <p>
          &copy; 2018-{new Date().getFullYear()} Max_Ezaki All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
