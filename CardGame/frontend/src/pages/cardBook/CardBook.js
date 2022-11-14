import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cards } from "../../images";
import { userAction } from "../../redux/middleware";
import { Whole, Wrap, CardWrap, CardCount, CardImg } from "./style";

const CardBook = () => {
  const dispatch = useDispatch();
  const usersCards = useSelector(state => state.cardReducer);
  const userId = useSelector(state => state.loginReducer.id);
  useEffect(() => {
    dispatch(userAction.getUserCards(userId));
  }, []);
  console.log(usersCards[userId] && usersCards[userId]);
  return (
    <Whole className="contents">
      <Wrap>
        {Object.keys(cards)
          .reverse()
          .map(key => (
            <CardWrap key={key}>
              {usersCards[userId]?.map(el => el.img).includes(key) ? (
                <CardCount>x{usersCards[userId]?.filter(el => el.img === key).length}</CardCount>
              ) : null}
              <CardImg
                src={cards[key]}
                style={
                  usersCards[userId]?.map(el => el.img).includes(key)
                    ? { filter: "none" }
                    : { filter: "grayscale(100%)" }
                }
              ></CardImg>
              {/* <div>{usersCards[userId]?.filter(el => el.img === key).length}</div> */}
            </CardWrap>
          ))}
      </Wrap>
    </Whole>
  );
};

export default CardBook;
