import styles from "./footer.module.css";
import Link from "next/link";
import {
  FaWordpress,
  FaTwitter,
  FaInstagram,
  FaTumblr,
  FaSoundcloud,
  FaLinkedin,
} from "react-icons/fa";

const icon = [
  {
    id: 1,
    link: "https://rhythm-onchi.com",
    name: <FaWordpress size={"2em"} title={"blog"} />,
  },
  {
    id: 2,
    link: "https://twitter.com/Max_Ezaki",
    name: <FaTwitter size={"2em"} title={"Twitter"} />,
  },
  {
    id: 3,
    link: "https://www.instagram.com/max_ezaki/",
    name: <FaInstagram size={"2em"} title={"instagram"} />,
  },
  {
    id: 4,
    link: "https://maxezaki.photo",
    name: <FaTumblr size={"2em"} title={"tumblr"} />,
  },
  {
    id: 5,
    link: "https://soundcloud.com/max-ezaki/sets/voice-sample-from-trailer-movie-remind?si=9a77e471d4bc4c77ae56485e12b9a471&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    name: <FaSoundcloud size={"2em"} title={"soundcloud"} />,
  },
  {
    id: 6,
    link: "https://www.linkedin.com/in/max-ezaki-06a364159/",
    name: <FaLinkedin size={"2em"} title={"linkedin"} />,
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div>
        <div className={styles.icon}>
          {icon.map((e) => (
            <Link href={e.link} key={e.id} target="_blank">
              {e.name}
            </Link>
          ))}
        </div>
        <p>&copy; 2018-{currentYear} Max_Ezaki All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
