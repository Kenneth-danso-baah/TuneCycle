![renew brand](frontend/public/images/tc-turner.svg)

<p align="left">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
  <img src="https://img.shields.io/badge/Privy-6F3FF5?style=for-the-badge&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
    <img src="https://img.shields.io/badge/viem-3C8039?style=for-the-badge&logoColor=white" />
  <img src="https://img.shields.io/badge/Foundry-FF6600?style=for-the-badge&logo=data:image/png;base64,YOUR_BASE64_LOGO_HERE&logoColor=white" />
   <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logoColor=white" />
</p>

## Overview

# 🎵 **NFT Music Leasing Dapp**  

This project is a **next-generation NFT Music Leasing Dapp** that allows artists to lease their music to fans or companies for a specified period. The leasing process grants temporary ownership rights to the lessee, enabling them to use the music as agreed. Once the lease period expires, the rights automatically revert back to the original artist, ensuring full control over their creations.  

## 🔹 **Key Features**  
- **User Authentication**: Seamless and secure authentication using Privy.Accessing app through wallet
- **NFT-Based Music Leasing** – Artists can lease their music as NFTs, defining the duration of ownership.  
- **Automated Rights Reversal** – At the end of the lease period, ownership rights return to the artist.  
- **Seamless Transactions** – Secure and efficient payments processed through blockchain technology.  
- **Transparent & Trustless System** – Smart contracts ensure fair and enforceable agreements.  

🎶 **Redefining music ownership and leasing through blockchain innovation!** 🚀  

## Setup Instructions

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn** (Node.js package managers)
- **Git** (for cloning the repository)
- **Foundry** (for smart contract development and testing)
- **MetaMask** or any Ethereum wallet (for interacting with the DApp)

### Installation

1. **Clone the Repository**

   - Open your terminal or command prompt.
     ```bash
     git clone https://github.com/claudioussamuel/TuneCycle
     ```
     ```bash
     cd frontend
     ```
     
  2. **Install Dependencies**
   - Install all required dependencies by running:
     ```bash
     npm install
     ```
     or if you're using Yarn:
     ```bash
     yarn install
     ```

3. **Set Up Environment Variables**
   - Create a `.env.local` file in the root directory of the project.
   - Add the following environment variables:
     ```env
     NEXT_PUBLIC_PRIVY_APP_ID=your_privy_app_id
     NEXT_PUBLIC_PRIVY_APP_SECRET=your_privy_secret_key
     NEXT_PUBLIC_SEPOLIA_ID=your_alchemy_api_key
     NEXT_PUBLIC_PINATA_JWT=your_pinata_jwt
     NEXT_PUBLIC_GATE_WAY=your_gate_way
     ```
     - Replace `your_privy_app_id` with your actual Privy App ID (get it from the [Privy Dashboard](https://privy.io/)).
     - Replace `your_alchemy_api_key` with your Alchemy API key (if you're using Alchemy for Ethereum node access).



### Additional Notes

- **Smart Contracts**:

  - The project uses **Foundry** for smart contract development, testing, and deployment.
  - Compile, test, and deploy contracts:

    ```bash
    # Compile contracts
    forge build

    # Run tests
    forge test

    # Deploy contracts
    forge script script/Deploy.s.sol --rpc-url <your_rpc_url> --private-key <your_private_key>
    ```

- **Wallet Integration**:

  - The project uses **viem** with **Privy** for wallet connections and blockchain interactions.
  - This combination provides a streamlined user experience while maintaining security.

- **Testing the DApp**:
  - Use testnet stablecoins (e.g., USDC on Sepolia) to simulate payments.
  - Ensure your wallet is connected to the correct Ethereum network (e.g., Sepolia Testnet).

---

### Troubleshooting

- **Environment Variables**: Ensure all required environment variables are set in `.env.local`.
- **Wallet Connection**: If the wallet fails to connect, ensure your wallet (e.g., MetaMask) is installed and unlocked.
- **Transaction Issues**: If transactions fail, check your wallet balance and network connection.
- **Foundry Issues**: Make sure Foundry is properly installed and updated to the latest version.


### Project Structure

---

## **1. Smart Contracts (`/contracts`)**
The `contracts` folder contains all the code related to the blockchain and smart contracts.

### **Key Subfolders:**
- **`test/`**: 
  - Contains unit tests and integration tests for the smart contracts.
  - Ensures the contracts function as expected before deployment.
    
- **`scripts/`**: Houses deployment scripts (e.g., using Foundry) to deploy contracts to various networks (mainnet, testnet, etc.).
  - Stores deployed contract artifacts (ABIs, addresses, etc.) for easy access by the frontend.
    
- **`src/`**:
  - Contains the main Solidity smart contract files.
  - Organized into logical modules (e.g., `JustPay.sol`).

---

## **2. Frontend (`/frontend`)**
The `frontend` folder contains the code for the user interface and application logic.

### **Key Subfolders:**
- **`src/`**:
  - **`app/`**:
    - Contains the main application logic and routing configuration (`appRoutes`).
    - Handles navigation and page rendering based on routes.
  - **`components/`**:
    - Houses reusable UI components (e.g., buttons, modals, cards).
    - Promotes code reusability and maintainability.
  - **Other Files**:
    - Includes utility functions, hooks, and context providers.
- **`.env.local`**:
  - Stores environment-specific variables (e.g., API keys, contract addresses).
  - Ensures sensitive data is not hardcoded into the application.

---

## **3. Benefits of This Structure**
- **Centralized Codebase**: Both frontend and smart contracts are in one place, making it easier to manage dependencies and workflows.
- **Modular Design**: Separates concerns (e.g., contracts, frontend, tests) for better organization.
- **Ease of Deployment**: Deployment scripts and artifacts are stored alongside the contracts, simplifying the deployment process.
- **Reusable Components**: Frontend components are modular and reusable, reducing duplication of code.
- **Environment Management**: `.env.local` ensures sensitive data is securely managed and not exposed in the codebase.

---

### **Wow Factor: Schedule Payments with Smart Contracts**

This feature allows users to **schedule payments** to be sent to someone at a specific date and time. The smart contract will automatically execute the payment at the scheduled time **without requiring further interaction** from the user or the application.

---

#### **How It Works**
1. **User Input**:
   - The user specifies:
     - The recipient's address.
     - The amount to send.
     - The date and time for the payment.

2. **Smart Contract**:
   - A smart contract is deployed to handle scheduled payments.
   - The contract stores:
     - The payment details (recipient, amount, timestamp).
     - The sender's address and funds.

3. **Automated Execution**:
   - The smart contract uses a **time-based trigger** (e.g., block timestamp) to execute the payment at the specified time.
   - Once the scheduled time is reached, the contract automatically sends the funds to the recipient.

4. **No Code Interaction**:
   - After the payment is scheduled, no further interaction with the application or code is required.
   - The smart contract handles everything autonomously.

---

### **Key Features of the App**  

1. **Buy Music from Creators**  
   - Users can purchase music directly from artists as NFTs.  
   - Secure blockchain transactions ensure authenticity and ownership.  

2. **Lease Music to Fans & Record Labels**  
   - Artists can lease their music to fans or record labels for a specific period.  
   - Smart contracts ensure that ownership reverts back to the artist once the lease expires.  

3. **Chatbot for User Assistance**  
   - Integrated AI-powered chatbot to assist users with navigation, transactions, and leasing processes.  
   - Provides instant responses to user queries, enhancing the overall experience.  

4. **Account Abstraction**  
   - Simplifies blockchain interactions by allowing users to perform transactions without managing complex private keys.  
   - Provides a smoother onboarding experience for non-crypto users.  

5. **AI-Powered Music Recommendations**  
   - AI integration helps users discover new music based on their listening patterns and preferences.  
   - Personalized recommendations improve user engagement.  

6. **Secure & Transparent Transactions**  
   - Utilizes blockchain technology to provide a transparent and tamper-proof transaction history.  
   - Ensures fair payment distribution for artists and record labels.  

7. **Funding Wallet & Seamless Payments**  
   - Users can fund their wallets using on-ramp services like Coinbase.  
   - Supports instant crypto transactions for purchasing and leasing music.  

8. **Transaction History & Analytics**  
   - Displays a comprehensive history of purchases, leases, and payments.  
   - Provides insights into earnings and spending patterns for users.  

9. **Smart Contract-Powered Ownership Management**  
   - Automated leasing agreements ensure that music rights are transferred and returned seamlessly.  
   - Prevents unauthorized use of content through blockchain enforcement.  

