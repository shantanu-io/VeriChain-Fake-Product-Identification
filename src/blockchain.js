
"use strict";

window.verichainWeb3 = null;
window.verichainContract = null;

window.connectVeriChain = async function () {
  try {
    if (!window.ethereum) {
      throw new Error("MetaMask is not installed. Please install or unlock MetaMask.");
    }

    if (!window.Web3) {
      throw new Error("Web3 library is missing. Check src/js/web3.min.js.");
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts"
    });

    if (!accounts || accounts.length === 0) {
      throw new Error("Please unlock MetaMask and select an account.");
    }

    const web3 = new Web3(window.ethereum);
    const networkId = await web3.eth.net.getId();

    if (Number(networkId) !== 5777) {
      throw new Error(
        "Wrong network. Select your local Ganache network (Network ID 5777) in MetaMask."
      );
    }

    if (!window.VERCHAIN_CONTRACT_ADDRESS || !window.VERCHAIN_CONTRACT_ABI) {
      throw new Error("Contract configuration is missing.");
    }

    const contract = new web3.eth.Contract(
      window.VERCHAIN_CONTRACT_ABI,
      window.VERCHAIN_CONTRACT_ADDRESS
    );

    // Check that contract code exists at the configured address.
    const contractCode = await web3.eth.getCode(
      window.VERCHAIN_CONTRACT_ADDRESS
    );

    if (!contractCode || contractCode === "0x") {
      throw new Error(
        "No contract found. Make sure Ganache is running and the contract is deployed."
      );
    }

    window.verichainWeb3 = web3;
    window.verichainContract = contract;

    console.log("VeriChain connected:", accounts[0]);
    console.log("Network ID:", networkId);
    console.log("Contract:", window.VERCHAIN_CONTRACT_ADDRESS);

    return {
      account: accounts[0],
      networkId: Number(networkId),
      contract: contract
    };
  } catch (error) {
    console.error("VeriChain connection failed:", error);
    throw error;
  }
};

window.getVeriChainContract = async function () {
  if (!window.verichainContract) {
    await window.connectVeriChain();
  }

  return {
    web3: window.verichainWeb3,
    contract: window.verichainContract
  };
};
