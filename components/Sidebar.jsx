import React from "react";
import Link from "next/link";
import styles from "../styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.category}>
        <h3 className={styles.label}>Categories</h3>
        <ul>
          <li>
            <Link href="/politics">
              <a>Politics</a>
            </Link>
          </li>
          <li>
            <Link href="/entertainment">
              <a>Entertainment</a>
            </Link>
          </li>
          <li>
            <Link href="/sport">
              <a>Sport</a>
            </Link>
          </li>
          <li>
            <Link href="/education">
              <a>Education</a>
            </Link>
          </li>
          <li>
            <Link href="/music">
              <a>Music</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
