import React, { useRef } from "react";
import { Whole, Wrap, Items, Item } from "./style";

const Shop = () => {
  const slide = useRef();
  let isDown = false;
  let startX;
  let scrollLeft;
  let walk;
  function onMouseDown(e) {
    walk = 0;
    isDown = true;
    slide.current.classList.add("active");
    // e.pageX -> 이벤트 내에서의 마우스 x좌표
    startX = e.pageX - slide.current.offsetLeft;
    scrollLeft = slide.current.scrollLeft;
    for (let el of slide.current.children) {
      el.classList.remove("ShopAnimation");
    }
  }
  function onMouseMove(e) {
    if (!isDown) return;
    e.preventDefault();
    const currentX = e.pageX - slide.current.offsetLeft;
    walk = (currentX - startX) * 3;
    slide.current.scrollLeft = scrollLeft - walk;
  }
  function onMouseUp() {
    if (walk === 0) {
      console.log("여기서 클릭이벤트 실행하면됨");
    }
    isDown = false;
    slide.current.classList.remove("active");
    for (let el of slide.current.children) {
      el.classList.add("ShopAnimation");
    }
  }
  function onMouseLeave() {
    isDown = false;
    slide.current.classList.remove("active");
  }
  function onClick() {}
  return (
    <Whole className="contents">
      <Wrap>
        <Items
          className="ShopSlide"
          ref={slide}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
        >
          <Item className="ShopAnimation" style={{ backgroundColor: "red" }}></Item>
          <Item className="ShopAnimation" style={{ backgroundColor: "black" }}></Item>
          <Item className="ShopAnimation" style={{ backgroundColor: "white" }}></Item>
          <Item className="ShopAnimation" style={{ backgroundColor: "tomato" }}></Item>
          <Item className="ShopAnimation" style={{ backgroundColor: "green" }}></Item>
          <Item className="ShopAnimation" style={{ backgroundColor: "yellow" }}></Item>
          <Item className="ShopAnimation" style={{ backgroundColor: "pink" }}></Item>
          <Item className="ShopAnimation" style={{ backgroundColor: "red" }}></Item>
          <Item className="ShopAnimation" style={{ backgroundColor: "black" }}></Item>
          <Item className="ShopAnimation" style={{ backgroundColor: "white" }}></Item>
          <Item className="ShopAnimation" style={{ backgroundColor: "tomato" }}></Item>
        </Items>
      </Wrap>
    </Whole>
  );
};

export default Shop;
