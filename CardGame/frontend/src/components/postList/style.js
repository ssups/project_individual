import styled from "styled-components";
const List = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 5px 0 5px 0;
  box-sizing: border-box;
  :last-child {
    border-bottom: none;
  }
`;
const Title = styled.span`
  cursor: pointer;
  font-size: ${props => `${90 / (props.amountPerPage / 2)}px`};
  :hover {
    text-decoration: underline;
  }
`;
const ThumbNail = styled.img`
  /* 스타일트컴포넌트 props 사용 */
  width: ${props => `calc((100vh - 300px) / ${props.amountPerPage} - 20px)`};
  height: ${props => `calc((100vh - 300px) / ${props.amountPerPage} - 20px)`};
  margin-right: 80px;
`;
export { List, Title, ThumbNail };
