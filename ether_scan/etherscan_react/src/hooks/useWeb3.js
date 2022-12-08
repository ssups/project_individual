import React, { useEffect, useState } from "react";
import Web3 from "web3/dist/web3.min";

const useWeb3 = () => {
  const [web3, setWeb3] = useState(null);
  const account = "0xd066e1059db7ec8b9f722d99b50e6cac611dafe8"; // 컨트렉트 배포할 계정 그냥 첫번째계정 가져옴
  useEffect(() => {
    (async () => {
      const web3 = await new Web3("ws://127.0.0.1:9005"); // geth 네트워크 가져오기
      setWeb3(web3);
      console.log(parseInt("0x3039", 16));
    })();
  }, []);
  return [account, web3];
};

export default useWeb3;
