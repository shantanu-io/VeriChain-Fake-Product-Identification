# VeriChain — Fake Product Identification Using Blockchain

A blockchain-based product verification system that allows users to register products and check whether a product ID exists in a trusted on-chain registry. VeriChain uses a Solidity smart contract, Web3.js, Ganache, and MetaMask to demonstrate blockchain-based product verification.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [How It Works](#how-it-works)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation and Setup](#installation-and-setup)
- [Using VeriChain](#using-verichain)
- [Troubleshooting](#troubleshooting)
- [Limitations](#limitations)
- [Future Enhancements](#future-enhancements)
- [Security Notes](#security-notes)

## Overview

Counterfeit products can cause financial losses and reduce consumer trust. VeriChain demonstrates how blockchain technology can help verify product registration records using a smart contract.

An authorized user can register product details on a local blockchain. Another user can enter the product ID on the website to check whether it is registered.

**Important:** VeriChain is an academic prototype running on a local Ganache blockchain. It demonstrates product registration and verification; it does not independently prove that a physical product is genuine.

## Features

- **Blockchain-based registration:** Store product records through a Solidity smart contract.
- **Product verification:** Check whether a product ID exists in the blockchain registry.
- **MetaMask integration:** Connect a wallet to interact with the smart contract.
- **Product registry:** View and search registered product records.
- **Dashboard:** Display registered-product totals and verification statistics.
- **Local development environment:** Test the application using Ganache without real cryptocurrency.
- **Transaction-based updates:** Register products through blockchain transactions.

## Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | User interface styling |
| JavaScript | Frontend functionality |
| Solidity 0.8.20 | Smart contract development |
| Truffle 5.11.5 | Contract compilation and deployment |
| Ganache | Local blockchain |
| Web3.js | Communication between the website and blockchain |
| MetaMask | Wallet connection and transaction approval |
| Node.js and npm | JavaScript runtime and package management |
| VS Code Live Server | Local website development |

## How It Works

1. The user opens the VeriChain website.
2. The user connects MetaMask to the local Ganache network.
3. The product registration form collects details such as product ID, name, manufacturer, batch number, category, and origin.
4. MetaMask requests approval for the registration transaction.
5. The smart contract records the product information on the blockchain.
6. A user enters a product ID in the verification section.
7. The application queries the smart contract and displays whether the ID is registered.
8. Dashboard and registry views retrieve registered records from the contract.

## Project Structure

The main project files are organized as follows. Your local folder may contain additional files.

```text
VeriChain-Fake-Product-Identification/
├── contracts/
│   └── ProductVerification.sol
├── migrations/
│   └── 1_deploy_product_verification.js
├── src/
│   ├── js/
│   │   └── web3.min.js
│   ├── contract-config.js
│   └── blockchain.js
├── index.html
├── truffle-config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Prerequisites

Install the following tools before starting:

- [Node.js and npm](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [Ganache](https://archive.trufflesuite.com/ganache/)
- [MetaMask](https://metamask.io/)
- [Visual Studio Code](https://code.visualstudio.com/)
- VS Code Live Server extension

The current development setup uses Node.js v24.22.1, Truffle v5.11.5, Solidity compiler v0.8.20, Ganache network ID 5777, and RPC port 7545.

## Installation and Setup

### 1. Clone the repository

Open a terminal and run:

```bash
git clone https://github.com/shantanu-io/VeriChain-Fake-Product-Identification.git
cd VeriChain-Fake-Product-Identification
```

### 2. Install dependencies

```bash
npm install
```

If Truffle is not available in the terminal, install the project-compatible version globally:

```bash
npm install -g truffle@5.11.5
```

Check the installation:

```bash
node --version
npm --version
truffle version
```

### 3. Start Ganache

1. Open Ganache.
2. Start a Quickstart workspace or create a local workspace.
3. Confirm the RPC server is running at `http://127.0.0.1:7545`.
4. Confirm the network ID is `5777`.

Keep Ganache running while using the application.

### 4. Compile the smart contract

From the project root directory, run:

```bash
truffle compile
```

The project uses Solidity compiler version `0.8.20`, as configured in `truffle-config.js`.

### 5. Deploy the smart contract

Run:

```bash
truffle migrate --reset
```

This deploys the contract to the configured local Ganache network. Record the newly deployed contract address from the terminal output.

### 6. Update the contract configuration

Open:

```text
src/contract-config.js
```

Update the contract address and ABI to match the newly deployed `ProductVerification` contract. Use the ABI generated by Truffle for the current contract.

**Important:** Each new Ganache workspace or blockchain reset may require redeployment and a configuration update.

### 7. Configure MetaMask

1. Open MetaMask in Chrome.
2. Add or select a local development network.
3. Use the RPC URL `http://127.0.0.1:7545`.
4. Set the network ID to `5777`.
5. Use the Chain ID displayed by your Ganache instance.
6. Import a test account using its private key from Ganache, if required.

Only use local test accounts. Never use your main wallet or expose its private key.

### 8. Start the website

Open the project folder in VS Code, right-click `index.html`, and select **Open with Live Server**.

The website usually opens at:

```text
http://127.0.0.1:5500/index.html
```

The exact port may differ depending on your Live Server configuration.

### 9. Connect and test

1. Open the website.
2. Click **Connect Wallet**.
3. Approve the connection in MetaMask.
4. Register a test product and approve the transaction.
5. Verify the same product ID.
6. Search for the registered product in the registry.
7. Test an unregistered ID to confirm that the application reports it as not found.

## Using VeriChain

### Register a product

Enter the required product information in the registration form and submit it. Confirm the transaction in MetaMask. The product should appear in the registry after a successful transaction.

### Verify a product

Enter a product ID in the verification section.

- **Registered ID:** The smart contract finds a corresponding registered record.
- **Unregistered ID:** The contract reports that no matching record exists.

A registered ID confirms only that a record exists in this registry. It does not guarantee that the physical item is authentic.

### View the registry

Open the registry section to view and search records loaded from the smart contract. Dashboard totals reflect the local blockchain registry, while verification counters may be stored locally in the browser.

## Troubleshooting

| Problem | Suggested solution |
|---|---|
| MetaMask cannot connect | Ensure MetaMask is unlocked and the correct local network is selected. |
| Wrong network error | Confirm the RPC URL, network ID, and Chain ID against Ganache. |
| Contract not found | Redeploy the contract and update `src/contract-config.js`. |
| Transaction fails | Check the selected account, available test ETH, contract deployment, and transaction details. |
| Registry does not load | Ensure Ganache is running and the contract address and ABI are correct. |
| `connectVeriChain` is undefined | Open the project through Live Server and check the script paths and order in `index.html`. |
| Dependencies are missing | Run `npm install` from the project root. |

## Limitations

- The current version uses a local development blockchain, not a public production network.
- Data on one Ganache instance is not automatically available on another computer.
- Product verification checks registry membership, not physical authenticity.
- Product registration depends on the deployed smart contract and its access-control rules.
- Dashboard verification counters stored in browser local storage are browser-specific.
- The prototype has not been audited for production security or scalability.

## Future Enhancements

- QR-code generation and scanning for product IDs.
- Manufacturer identity verification and role-based access control.
- Product history and supply-chain tracking.
- Integration with a public blockchain testnet.
- Product images and tamper-evident packaging references.
- Automated smart contract testing and security review.
- Improved user interface and deployment documentation.

## Security Notes

- Never commit private keys, Secret Recovery Phrases, passwords, or sensitive environment files.
- Use only Ganache test accounts during local development.
- Keep `node_modules/` out of Git; recreate dependencies with `npm install`.
- Review dependencies and smart contract security before deploying to a public network.
- Do not treat this academic prototype as a production anti-counterfeiting service.

## Author

**Shantanu Patil**

GitHub: [shantanu-io](https://github.com/shantanu-io)

## Project Status

Academic prototype — local blockchain development and testing.

