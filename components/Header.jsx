import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const toggleDropDown = () => {
    setToggle(!toggle);
  };
  return (
    <div className={styles.header}>
      <div>
        <Link href="/">
          <a className={styles.logo}>MUNFRAID</a>
        </Link>

        <div className={styles.action}>
          <nav>
            <ul>
              <li>
                <Link href="/facebook">
                  <a>
                    <FaFacebookF />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/twitter">
                  <a>
                    <FaTwitter />
                  </a>
                </Link>
              </li>
            </ul>
          </nav>

          <button
            onClick={() => toggleDropDown()}
            className={styles.dropdownBtn}
          >
            <MdMenu className={styles.dropdownIcon} />
          </button>
        </div>
      </div>
      <div className={`${toggle ? styles.navbar : styles.hidden}`}>
        <nav>
          <ul>
            <li>
              <Link href="/facebook">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/twitter">
                <a>Politics</a>
              </Link>
            </li>
            <li>
              <Link href="/twitter">
                <a>Sports</a>
              </Link>
            </li>
            <li>
              <Link href="/twitter">
                <a>Entertainmment</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
