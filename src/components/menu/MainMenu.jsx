import React, { useState } from "react";
import { Link } from "react-router-dom";
import { WeddingInfoMenu, weddingInfoMenuItems } from "./WeddingInfoMenu";
import styles from "./MainMenu.module.css";
import homeIcon from "../../assets/homeIcon.jpg";

function MainMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const mainMenuItems = [
    { name: "홈", path: "/jjakkung", icon: homeIcon },
    { name: "짝꿍", path: "/description" },
    { name: "우리의 일정", path: "/schedule" },
    { name: "다른 이의 일정", path: "/other-schedule" },
    { name: "결혼정보", path: "/wedding-info" },
    { name: "데이트정보", path: "/dating-info" },
    { name: "커뮤니티", path: "/community" },
    { name: "로그인", path: "/login" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
      {/* 햄버거 메뉴 버튼 */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={styles.menu}>
        {mainMenuItems.map((item) => (
          <li
            key={item.name}
            className={`${styles.menuItem} ${
              item.name === "로그인" ? styles.loginMenu : ""
            }`}
            onMouseEnter={() => setHoveredMenu(item.name)}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <Link to={item.path} className={styles.link}>
              {item.name === "홈" ? (
                <img
                  src={item.icon}
                  alt="홈 아이콘"
                  className={styles.homeIcon}
                />
              ) : (
                item.name
              )}
            </Link>
            {item.name === "결혼정보" && hoveredMenu === "결혼정보" && (
              <ul className={styles.subMenu}>
                {weddingInfoMenuItems.map((menuItem) => (
                  <WeddingInfoMenu
                    key={menuItem}
                    title={menuItem}
                    isHovered={hoveredMenu === "결혼정보"}
                  />
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
