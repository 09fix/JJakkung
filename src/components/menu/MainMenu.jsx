import React, { useState } from "react";
import { Link } from "react-router-dom"; // Link 컴포넌트 추가
import { WeddingInfoMenu, weddingInfoMenuItems } from "./WeddingInfoMenu";
import styles from "./MainMenu.module.css";

function MainMenu() {
  const mainMenuItems = [
    { name: "짝꿍", path: "/jjakkung" },
    { name: "우리의 일정", path: "/schedule" },
    { name: "다른 이의 일정", path: "/other-schedule" },
    { name: "결혼정보", path: "/wedding-info" },
    { name: "데이트정보", path: "/dating-info" }, // 예시 추가
    { name: "커뮤니티", path: "/community" },
    { name: "로그인", path: "/login" },
  ];

  const [hoveredMenu, setHoveredMenu] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredMenu(item);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        {mainMenuItems.map((item) => (
          <li
            key={item.name}
            className={`${styles.menuItem} ${
              item.name === "로그인" ? styles.loginMenu : ""
            }`}
            onMouseEnter={() => handleMouseEnter(item.name)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to={item.path}
              className={`${styles.link} ${
                item.name === "로그인" ? styles.loginLink : ""
              }`}
            >
              {item.name}
            </Link>
            {item.name === "결혼정보" && hoveredMenu === "결혼정보" && (
              <ul className={styles.subMenu}>
                {weddingInfoMenuItems.map((menuItem) => (
                  <WeddingInfoMenu key={menuItem} title={menuItem} />
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainMenu;
