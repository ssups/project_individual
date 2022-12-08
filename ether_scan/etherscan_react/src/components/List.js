import React from "react";

const List = ({ block }) => {
  const timeData = new Date(block?.timestamp * 1000);
  //   const time = timeData.getDate();

  return (
    <>
      {block ? (
        <tr style={styles.wrap}>
          <td>{block.number}</td>
          {/* <td>시간 :{block.timestamp}</td> */}
          <td style={styles.address}>
            {timeData.getFullYear()}년 {timeData.getMonth() + 1}월 {timeData.getDate()}일
            {timeData.getHours()}시 {timeData.getMinutes()}분
          </td>
          <td style={styles.address}>{block.miner}</td>
          <td>{block.transactions.length}</td>
          <td>{block.gasUsed}</td>
          <td>{block.gasLimit}</td>
          <td>{block.difficulty}</td>
        </tr>
      ) : (
        <tr style={styles.wrap}>
          <td>empty</td>
        </tr>
      )}
    </>
  );
};

const styles = {
  wrap: {
    border: "2px solid black",
  },
  address: {
    width: "70px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
};

export default List;
