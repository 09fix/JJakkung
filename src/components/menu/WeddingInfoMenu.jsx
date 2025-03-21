import React from "react";
import styles from "./WeddingInfoMenu.module.css"; // 새 스타일 파일 임포트

function WeddingInfoMenu({ title, isHovered }) {
  return (
    <li>
      <a href="#">{title}</a>
      {isHovered && (
        <ul className={`${styles.subMenu} ${isHovered ? styles.show : ""}`}>
          {/* 서브 메뉴 항목들 */}
        </ul>
      )}
    </li>
  );
}

const weddingInfoMenuItems = ["웨딩촬영", "스튜디오", "드레스", "메이크업"];

export { WeddingInfoMenu, weddingInfoMenuItems };
