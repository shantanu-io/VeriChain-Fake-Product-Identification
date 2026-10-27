
window.VERCHAIN_CONTRACT_ADDRESS = "0x2372E7c0106CFC569C1D201ba14eAF3746c8DCa2";

window.VERCHAIN_CONTRACT_ABI = [
  {
    "inputs": [
      {"internalType":"string","name":"productId","type":"string"},
      {"internalType":"string","name":"name","type":"string"},
      {"internalType":"string","name":"manufacturer","type":"string"},
      {"internalType":"string","name":"batchNumber","type":"string"},
      {"internalType":"string","name":"category","type":"string"},
      {"internalType":"string","name":"origin","type":"string"}
    ],
    "name":"registerProduct",
    "outputs": [],
    "stateMutability":"nonpayable",
    "type":"function"
  },
  {
    "inputs": [
      {"internalType":"string","name":"productId","type":"string"}
    ],
    "name":"verifyProduct",
    "outputs": [
      {"internalType":"bool","name":"exists","type":"bool"},
      {"internalType":"string","name":"name","type":"string"},
      {"internalType":"string","name":"manufacturer","type":"string"},
      {"internalType":"string","name":"batchNumber","type":"string"},
      {"internalType":"string","name":"category","type":"string"},
      {"internalType":"string","name":"origin","type":"string"},
      {"internalType":"address","name":"registeredBy","type":"address"},
      {"internalType":"uint256","name":"registeredAt","type":"uint256"}
    ],
    "stateMutability":"view",
    "type":"function"
  },
  {
    "inputs": [],
    "name": "getProductCount",
    "outputs": [
      {"internalType":"uint256","name":"","type":"uint256"}
    ],
    "stateMutability":"view",
    "type":"function"
  },
  {
    "inputs": [
      {"internalType":"uint256","name":"index","type":"uint256"}
    ],
    "name":"getProductIdAt",
    "outputs": [
      {"internalType":"string","name":"","type":"string"}
    ],
    "stateMutability":"view",
    "type":"function"
  }
];
