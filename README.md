# Session Cards

Outline:

1. A history about why crypto UX is not improving (pains about gaming and defi)
2. What is Account Abstraction (short)
3. What is Session Keys
4. Architecture
5. How it’s made
6. Future Work

**_Why is Crypto UX Still a Pain?_**

Email, iCloud, Twitter, and many more... The Internet is only about identities, but in the web2 world, the identities are provided by trusted centralized providers.  We need to make crypto trustless and user-owned, which is one of the reasons why we have hard-coded validity rules on blockchains.

If you want to initiate a transaction on Ethereum than you should;

- have a valid nonce
- have enough ETH for gas
- have a valid ECSDA signature and many more.

And this is why crypto UX is still a pain and wallets are still visible. Let’s give some examples that these validity rules limit us.

**Order Book based DEX:**

Users must submit a transaction for each operation. You want to spend your USDC on Ether? Okay, sign this message! Have you reconsidered?  Than, sign this message! You'd like to sell your Ether. Here, sign this message!.. Each time you express your operation, you have to use your wallet, and yes, the wallet is visible and you are aware that you are doing so! (We're working on this to solve it!)

**NFT Based Game:**
Assume you're playing an NFT-based card game, and each move you make requires you to sign a message from your wallet. You wish to fight with your second card? Okay, sign this message!... We require a transaction for each move, as well as the native token to pay the costs. This is one of the biggest barriers for web3 games. (We are also working on this!)

![lasödşlaösdşlsa](https://github.com/itublockchain/eth-paris-session-key/assets/71966179/57c58651-5dde-4c11-8baf-51cc6bf244b3)


Assume you've registered a Twitter account using your email address, and each of your postings requires a signature from your email. Twitter's UX would be terrible if the architecture was developed in this manner. While using the software, your identity (email) is invisible. Crypto wallets should also be invisible. To make crypto wallets invisible, we need a way to make wallets smart: Account Abstraction.

**What is Account Abstraction**

In normal Ethereum Transactions you can’t initiate it if you don't ensure you don't match with validity rules. Account Abstraction allows you to program the validity rules of your account with arbitrary logics. This sounds easy but in fact it was not. It took too many years to be live on Ethereum. After PBS (proposer and builder separation) and many innovations AA became real. Let’s take a look at what AA brings us and its use cases.

- **Using different algorithms to prove the identity:** This allows wallet builders to use different curves as a signing method and can improve the onboarding process
- **Paying gas fees with different tokens**: Paymaster technology allows developers to build Smart Wallets that users don't need to keep native tokens to access the blockchain.
- **Batch Transaction:** You can make two transactions together (such as transferfrom and approve) since you can call arbitrary calldata with “_executeuserop”._
- **Session Keys: A way to change how users engage with dapps.**

**Session Keys**

In the web2 world, session keys are like temporary passwords used during a conversation between two devices (like your computer and a server). They're created at the start of the conversation, used to keep the information shared secure, and then thrown away after the conversation ends. So, even if a hacker somehow finds out this password, they can't use it to listen in on future conversations because a new, different password (or session key) is created each time.

As in the web2 world, we define session keys as a framework that has the potential to change how users engage with dApps. The goal of session keys is to allow users to set pre-approvals for a specific time in a variety of scenarios.

![jhgjgjhgjghj](https://github.com/itublockchain/eth-paris-session-key/assets/71966179/37be882c-180e-462a-ae95-e81e1eb61905)



[Our Contracts](./account-contracts/contracts/Safe4337SessionKeyModule.sol)

[Our Contract](./account-contracts//contracts/GameSessionValidationModule.sol)

When we use session keys:

- **As a user perspective:** Users are signing with their wallet only one time. After that users are sending a request to dApp the builder to sign their messages on their behalf. So users are just “signing” with their identity and starting to play with the dApp.
- **As a dApp builder perspective:** dApp builders are responsible for preparing and sending the transactions to blockchain and serving the front end. dApp builders should create a node-like thing to sign for users’ behalf.

**How it’s made?**

We have three parts for our project: A smart account contract powered by Biconomy and Safe, a smart contract for NFT based game and a front end for the game.

**Smart Account Contract and its components:**

![Dogansakdasldmalskdm](https://github.com/itublockchain/eth-paris-session-key/assets/71966179/d3c19573-7388-4847-abe7-b66261bd61b0)



[Our Contract](./account-contracts//contracts/Safe4337SessionKeyModule.sol)

Our main Smart Account contract is Safe’s base contract. We have implemented a plugin to make it 4337 compatible which allows us to initiate the transaction in a decentralized way instead of having centralized relayers. This plugin also contains Biconomy’s Session Key module for enabling the Session Key feature.

The signer (dapp builder) first signs the message in userop format. Biconomy's Session Key Manager checks the session during the validation of this userop. Manager initially determines whether or not the session is on the merkle tree (we keep sessions on a merkle tree to save money). The session is then checked for correctness. If everything is passed well, exactTransaction is called, which calls the executefrommodule function, which interacts with Card Game Contracts.

As a result, we have fully interoperable smart contract modules that operate well together and enable users to interface with blockchains.

**Card Contract and Front End components:**

The contract represents a simple card game where players can enter, choose cards, and take turns attacking each other. The winner is determined by the player with surviving cards. There is also a GameFactory contract to create new game instances easily.

**Future works:**

- **Generalized Sign In, Sign Out standards for Session Keys:** It is possible to build pre-approvals, which creates a mechanism for people to use blockchain without recognizing it but users should be able to revoke the given ownership - similar to sign out.
- **Make it easy to build signer for dApp builders:** If we can’t define how to make a secure signer for your dapp than the signer mechanism can be vulnerable to attacks.
- **Enable Offchain batching mechanisms for DEX’s:** We can leverage offchain computing and batching technologies to deliver the best execution part because requests are a declarative way to describe user needs.
- **Make it compatible with intent based architectures:** Although intents are merely a type of signed message, there is a possibility of making it compatible with intent-based systems.
