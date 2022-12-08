import "./App.css";
import { useEffect, useState } from "react";
import useWeb3 from "./hooks/useWeb3";
import { Pagination } from "./components";

function App() {
  const [account, web3] = useWeb3();
  // const [deployed, setDeployed] = useState();
  // const [CA, setCA] = useState();
  useEffect(() => {
    (async () => {
      if (!web3) return;
      const eth = await web3.eth;
      const balance = await web3.eth.getBalance(account);
      const accounts = await web3.eth.getAccounts();
      console.log(eth);
      console.log(balance);
      console.log(accounts);
    })();
  }, [web3]);

  // eth.sendTransaction({from: eth.coinbase, to: eth.accounts[1], value:})
  // miner.setEtherbase(eth.coinbase)
  // miner.start(1)
  // miner.stop()

  return (
    <div className="App">
      <Pagination web3={web3} />
    </div>
  );
}

export default App;
