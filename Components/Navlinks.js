import { useState, useEffect } from "react";
import styles from "../styles/NavbarFooter.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Navlinks = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    setActiveLink(router.asPath);
  }, [router.asPath]);

  return (
    <>
      <div className={styles.navlinks}>
        <Link href="/">
          <span
            style={{
              opacity:
                activeLink === "/" || activeLink === "/#work" ? "100%" : "80%",
            }}
          >
            Home
          </span>
        </Link>
      </div>
      <div className={styles.navlinks}>
        <Link href="/#about">
          <span style={{ opacity: activeLink === "/#about" ? "100%" : "80%" }}>
            Sobre mi
          </span>
        </Link>
      </div>
      <div className={styles.navlinks}>
        <Link href="/work">
          <span style={{ opacity: activeLink === "/work" ? "100%" : "80%" }}>
            Mis Trabajo
          </span>
        </Link>
      </div>
      <div className={styles.navlinks}>
        <Link href="/contact">
          <span style={{ opacity: activeLink === "/contact" ? "100%" : "80%" }}>
            Contacto
          </span>
        </Link>
      </div>
    </>
  );
};

export default Navlinks;
