import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <p>&copy; 2025 JJakkung. All rights reserved.</p>
      <p>
        <a href="#" className={styles.link}>
          개인정보 처리방침
        </a>{" "}
        |
        <a href="#" className={styles.link}>
          이용약관
        </a>
      </p>
    </div>
  );
}

export default Footer;
