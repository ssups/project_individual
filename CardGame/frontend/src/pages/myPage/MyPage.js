import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrap, Inventory, InventoryWrap, Item } from "./style";
import { Card } from "../../components";
import { PopUp, PopUP } from "../../components";
import { itemAction, userAction } from "../../redux/middleware";

const MyPage = () => {
  const userId = useSelector(state => state.loginReducer.id);
  // const userId = sessionStorage.getItem("user_id");
  const cards = useSelector(state => state.cardReducer);
  const items = useSelector(state => state.itemReducer);
  const [speed, setSpeed] = useState(3);
  const dispatch = useDispatch();
  const slide = useRef();
  const interval = useRef();
  const [popUp, setPopUp] = useState(false);
  const [popUpSvg, setPopUpSvg] = useState(null);
  const svg = {
    cardPack: (
      <svg data-item="cardPack" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path
          data-item="cardPack"
          d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"
        />
      </svg>
    ),
    point: (
      <svg data-item="point" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          data-item="point"
          d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"
        />
      </svg>
    ),
  };
  useEffect(() => {
    console.log(items);
  }, [items]);
  useEffect(() => {
    dispatch(userAction.getUserCards(userId));
    // 밑에 아이템 가져오는거는 알림때 필요해서 header에서 실행시킴
    // dispatch(userAction.getUserItems(userId));
  }, []);
  useEffect(() => {
    clearInterval(interval.current);
    moveSlide();
    return () => clearInterval(interval.current);
  }, [speed]);

  function moveSlide() {
    interval.current = setInterval(() => {
      if (slide.current) {
        slide.current.scrollLeft += speed;
        if (
          slide.current.scrollLeft >=
          slide.current.scrollWidth - slide.current.offsetWidth - 10
        ) {
          setSpeed(-3);
        }
        if (slide.current.scrollLeft < 5) {
          setSpeed(+3);
        }
      }
    }, 20);
  }
  function play() {
    clearInterval(interval.current);
    moveSlide();
  }
  function stop() {
    clearInterval(interval.current);
  }
  function showItem(e) {
    // console.log(e.target.dataset.item);
    setPopUp(true);
    setPopUpSvg(svg[e.target.dataset.item]);
  }

  return (
    <div className="contents">
      {popUp ? <PopUp setPopUp={setPopUp} popUpSvg={popUpSvg}></PopUp> : null}
      <Wrap>
        인벤토리
        <Inventory>
          <InventoryWrap>
            {items.card_pack_basic > 0 ? (
              <Item onClick={showItem} data-item="cardPack">
                {svg.cardPack}
                <span data-item="cardPack">기본 카드팩 X {items.card_pack_basic}</span>
              </Item>
            ) : null}
            {items.point_5000 > 0 ? (
              <Item onClick={showItem} data-item="point">
                {svg.point}
                <span data-item="point">포인트팩(5,000) X {items.point_5000}</span>
              </Item>
            ) : null}
          </InventoryWrap>
        </Inventory>
        카드덱 <button onClick={play}>재생</button>
        <button onClick={stop}>정지</button>
        <Inventory>
          <InventoryWrap ref={slide}>
            {cards[userId]
              ? cards[userId]
                  .sort((a, b) => b.average - a.average)
                  .map((el, ind) => <Card data={el} key={ind} />)
              : null}
          </InventoryWrap>
        </Inventory>
      </Wrap>
    </div>
  );
};

export default MyPage;
