import React from "react";
import style from "./Description.module.css";

function Description() {
  return (
    <div className={style.container}>
      <h1>짝꿍은 어떤 사이트인가요?</h1>
      <h2>
        짝꿍은 예비신부·신랑이 결혼을 준비하실 때,
        <br /> 스케줄을 관리하고 정보를 얻을 수 있도록 도와드립니다.
      </h2>
    </div>
  );
}

export default Description;
