import React, { useEffect, useRef, useState } from "react";
import { List, Loading } from "./index";
const Pagination = ({ web3 }) => {
  const [currentBlockNum, setCurrentBlockNum] = useState();
  const [blocks, setBlocks] = useState(null);
  const [curPage, setCurPage] = useState(1);
  const [prePage, setPrePage] = useState();
  const [amountPerPage, setAmountPerPage] = useState(15);
  useEffect(() => {
    (async () => {
      if (!web3) return;
      const currentBlockNum = await web3.eth.getBlockNumber();
      setCurrentBlockNum(currentBlockNum);
      const arr = [];
      setBlocks(null);
      setTimeout(async () => {
        //   for (let i = currentBlockNum; i >= 0; i--) {
        for (
          let i = currentBlockNum - (curPage - 1) * amountPerPage;
          i > currentBlockNum - curPage * amountPerPage;
          i--
        ) {
          if (i >= 0) {
            const block = await web3.eth.getBlock(i);
            arr.push(block);
          }
        }
        setBlocks(arr);
      }, 500);
      //   console.log(arr);
    })();
  }, [web3, curPage]);

  return (
    <div>
      {/* <div>{blocks ? blocks.map(el => <List key={el.number} />) : null}</div> */}
      {blocks ? (
        <div style={styles.wrap}>
          <table style={styles.lists}>
            <thead>
              <tr style={{ textAlign: "left" }}>
                <th style={{ width: "10%" }}>블록넘버</th>
                <th style={{ width: "15%" }}>블록 생성시간</th>
                <th style={{}}>Miner</th>
                <th style={{ width: "10%" }}>트젝갯수</th>
                <th style={{ width: "10%" }}>Gas Used</th>
                <th style={{ width: "15%" }}>Gas Limit</th>
                <th style={{ width: "10%" }}>난이도</th>
              </tr>
            </thead>
            <tbody>
              {Array(amountPerPage)
                .fill(0)
                .map((el, ind) => (
                  <List
                    // key={blocks[(curPage - 1) * amountPerPage + ind]?.number}
                    // block={blocks[(curPage - 1) * amountPerPage + ind]}
                    key={blocks[ind] ? blocks[ind].number : ind}
                    block={blocks[ind]}
                  />
                ))}
            </tbody>
          </table>
          <div style={styles.pages}>
            {Array(Math.ceil(currentBlockNum / amountPerPage))
              .fill(0)
              .map((el, ind) => (
                <span
                  key={ind + 1}
                  onClick={() => setCurPage((ind + 1) * 1)}
                  style={{ ...styles.pageNum, color: ind + 1 === curPage ? "red" : "black" }}
                >
                  {ind + 1}
                </span>
              ))}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

const styles = {
  wrap: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  lists: {
    width: "90%",
    height: "calc(90vh - 50px)",
    tableLayout: "fixed",
    border: "2px solid black",
    borderBottom: "none",
    borderCollapse: "collapse",
    // wordWrap: "break-word",
    wordWrap: "",
  },
  pages: {
    width: "50%",
    height: "50px",
    overflow: "scroll",
    marginTop: "25px",
  },
  pageNum: {
    width: "50px",
    // marginRight: "5px",
    paddingLeft: "5px",
    paddingRight: "5px",
    borderRight: "2px solid black",
    cursor: "pointer",
  },
};

export default Pagination;
