import React from "react";
import Header from "./Header";
import styles from "../styles/Layout.module.css";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.layoutbody}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
