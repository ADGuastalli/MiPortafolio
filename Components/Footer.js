import styles from "../styles/NavbarFooter.module.css";
import { userinfo } from "../Constants/userinfo";
import Link from "next/link";

const Footer = ({ currentTheme }) => {
  return (
    <div
      className={styles.footermain}
      style={{
        backgroundColor: currentTheme.footerColor,
        color: currentTheme.subtext,
      }}
    >
      <div className={styles.footertable}>
        <Link href="/">
          <h2 className={styles.footerlogo}>{userinfo.logoText}</h2>
        </Link>
        <ul>
          <li className={styles.listHeading}>Socials</li>
          {userinfo.socials
            ? userinfo.socials.map((social, key) => {
                return (
                  <Link href={social.link} key={key}>
                    <li>{social.type}</li>
                  </Link>
                );
              })
            : null}
          <Link
            href={`mailto:${
              userinfo.contact.email
                ? userinfo.contact.email
                : "alexisguastalli@gmail.com"
            }`}
          >
            <li>Mail</li>
          </Link>
        </ul>
        <ul>
          <li className={styles.listHeading}>Pages</li>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/#about">
            <li>Sobre mi</li>
          </Link>
          <Link href="/work">
            <li>Mis Trabajos</li>
          </Link>
          <Link href="/contact">
            <li>Contacto</li>
          </Link>
        </ul>
      </div>
      <hr
        style={{
          height: "1px",
          backgroundColor: currentTheme.subtext,
          border: "none",
          opacity: "0.5",
        }}
      ></hr>
      <h2 className={styles.footercontent}>
        © 2024 - Porfolio Guastalli . . All Rights Reserved.{" "}
      </h2>
    </div>
  );
};

export default Footer;
