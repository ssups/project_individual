import React, { useRef, useEffect, useState } from "react";
import { Whole, Wrap, Items, Item } from "./style";
import { PopUp } from "../../components";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

const Shop = () => {
  const slide = useRef();
  const interval = useRef();
  const [popUp, setPopup] = useState(false);
  let [speed, setSpeed] = useState(3);

  function moveSlide() {
    interval.current = setInterval(() => {
      console.log("인터벌 실행중");
      // slide.current 값이 늦게들어올때가 있어서 조건문으로 오류 방지
      if (slide.current) {
        slide.current.scrollLeft += speed;
        // 최대 스크롤값 구하기 slide.current.scrollWidth - slide.current.offsetWidth
        if (slide.current.scrollLeft >= slide.current.scrollWidth - slide.current.offsetWidth + 2) {
          setSpeed(-3);
        }
        if (slide.current.scrollLeft < 3) {
          setSpeed(+3);
        }
      }
    }, 20);
  }

  useEffect(() => {
    moveSlide();
    // 언마운트때 클리어인터벌 해주기
    return () => {
      clearInterval(interval.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speed]);
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
    clearInterval(interval.current);
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
      setPopup(true);
    }
    isDown = false;
    slide.current.classList.remove("active");
    clearInterval(interval.current);
    moveSlide();
  }
  function onMouseLeave() {
    isDown = false;
    slide.current.classList.remove("active");
    clearInterval(interval.current);
    moveSlide();
  }
  return (
    <Whole className="contents">
      {popUp ? <PopUp setPopup={setPopup} /> : null}
      <Wrap>
        <Items
          className="ShopSlide"
          ref={slide}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
        >
          {/* <div style={{ perspective: "1500px" }}> */}
          <Item style={{ backgroundColor: "white" }}></Item>
          <Item style={{ backgroundColor: "white" }}></Item>
          <Item style={{ backgroundColor: "white" }}></Item>
          <Item style={{ backgroundColor: "white" }}></Item>
          <Item style={{ backgroundColor: "white" }}></Item>
          <Item style={{ backgroundColor: "white" }}></Item>
          <Item style={{ backgroundColor: "white" }}></Item>
          <Item style={{ backgroundColor: "white" }}></Item>
          <Item style={{ backgroundColor: "white" }}></Item>
          <Item style={{ backgroundColor: "white" }}></Item>
          <Item style={{ backgroundColor: "white" }}></Item>
          <Item style={{ backgroundColor: "white" }}></Item>
          {/* <Item style={{ backgroundColor: "white" }}></Item> */}
          {/* </div> */}
        </Items>
      </Wrap>
    </Whole>
  );
};

export default Shop;
