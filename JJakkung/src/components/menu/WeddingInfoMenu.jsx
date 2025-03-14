import React from "react";

function WeddingInfoMenu({ title }) {
  return (
    <li>
      <a href="#">{title}</a>
    </li>
  );
}

const weddingInfoMenuItems = ["웨딩촬영", "스튜디오", "드레스", "메이크업"];

export { WeddingInfoMenu, weddingInfoMenuItems };
