import React, { useState } from "react";
import FaBars from "../../../assets/menuIcon.png";
import "./Schedule.module.css";

const Schedule = () => {
  const [items, setItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [cost, setCost] = useState("");
  const [description, setDescription] = useState("");

  const handleAddItem = () => {
    const newItem = { title, company, cost: parseInt(cost), description };
    setItems([...items, newItem]);
    setTotalCost(totalCost + newItem.cost);
    setTitle("");
    setCompany("");
    setCost("");
    setDescription("");
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    setTotalCost(updatedItems.reduce((acc, item) => acc + item.cost, 0));
  };

  const handleEditItem = (index, updatedItem) => {
    const updatedItems = [...items];
    updatedItems[index] = updatedItem;
    setItems(updatedItems);
    setTotalCost(updatedItems.reduce((acc, item) => acc + item.cost, 0));
  };

  return (
    <div className="schedule-container">
      <div className="total-cost">
        <span>지금까지의 총 비용은? {totalCost}원</span>
      </div>

      <div className="input-fields">
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="업체명"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          type="number"
          placeholder="비용"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
        <input
          type="text"
          placeholder="추가설명"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button className="add-button" onClick={handleAddItem}>
        추가하기
      </button>

      <div className="item-list">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <img src={FaBars} alt="menu" className="drag-icon" />
            <div className="item-details">
              <p>
                {item.title} | {item.company} | {item.cost}원 |{" "}
                {item.description}
              </p>
            </div>
            <div className="action-buttons">
              <button
                onClick={() =>
                  handleEditItem(index, { ...item, cost: item.cost + 500 })
                }
              >
                수정하기
              </button>
              <button onClick={() => handleDeleteItem(index)}>삭제하기</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
