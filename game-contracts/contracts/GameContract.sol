//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

contract CardGame {
    struct Card {
        uint256 id;
        uint power;
        uint health;
        bool isAlive;
        bool isTaken;
    }

    mapping(uint256 => Card) public cards;

    constructor() {
        for (uint256 i = 1; i < 11; i++) {
            cards[i] = Card(
                i,
                (block.timestamp % 10) + 1,
                ((block.timestamp * i) % 10) + 1,
                true,
                false
            );
        }
    }

    address public user1Address;
    address public user2Address;

    bool public user1IsEntered;
    bool public user2IsEntered;
    bool public user1IsTurn;
    bool public user2IsTurn;
    bool public isGameStarted;
    bool public gameOver;

    uint[] public user1Cards;
    uint[] public user2Cards;
    uint user1DeadCardCount = 0;
    uint user2DeadCardCount = 0;

    address winner;

    event GameStarted();
    event CardChosen(uint256 indexed cardId, address indexed player);
    event Attack(
        address indexed attacker,
        address indexed defender,
        uint256 attackerCardId,
        uint256 defenderCardId,
        uint256 damage
    );
    event GameOvered(address indexed winner);

    modifier gameNotInProgress() {
        require(isGameStarted, "Game has not started yet!");
        _;
    }

    modifier GameOver() {
        require(!gameOver, "game over");
        _;
    }

    function enter(address player) public GameOver {
        require(!isGameStarted, "Game already started!");

        require(msg.sender == player, "You are not the owner of this account!");

        if (!user1IsEntered) {
            user1Address = player;
            user1IsEntered = true;
            user1IsTurn = true;
        }
        if (!user2IsEntered) {
            user2Address = player;
            user2IsEntered = true;
        }
        if (user1IsEntered && user2IsEntered) {
            isGameStarted = true;
            emit GameStarted();
        }
    }

    function chooseCards(uint256 cardId) public gameNotInProgress GameOver {
        require(!cards[cardId].isTaken, "Already Taken");
        require(
            msg.sender == user1Address || msg.sender == user2Address,
            "You are not a player"
        );
        if (msg.sender == user1Address) {
            require(user1IsTurn, "Not your turn");
            require(user1Cards.length < 6, "You have enough cards");
            user1Cards.push(cardId);
        }
        if (msg.sender == user2Address) {
            require(user2IsTurn, "Not your turn");
            require(user2Cards.length < 6, "You have  enough cards");
            user2Cards.push(cardId);
        }

        emit CardChosen(cardId, msg.sender);
    }

    function attack(
        uint attackerId,
        uint defenderId
    ) public gameNotInProgress GameOver {
        require(cards[defenderId].isAlive, "This card is not alive");
        require(cards[attackerId].isAlive, "This card is not alive");

        if (cards[defenderId].health <= cards[attackerId].power) {
            cards[defenderId].isAlive = false;
            if (user1Address == msg.sender) {
                user1DeadCardCount++;
            }
            if (user2Address == msg.sender) {
                user2DeadCardCount++;
            }
            if (user1DeadCardCount == 5) {
                winner = user2Address;
            }
            if (user2DeadCardCount == 5) {
                winner = user1Address;
            }
        } else {
            cards[defenderId].health -= cards[attackerId].power;
        }
        // Change turn after each attack
        if (user1IsTurn) {
            user1IsTurn = false;
            user2IsTurn = true;
        } else {
            user2IsTurn = false;
            user1IsTurn = true;
        }
        emit GameOvered(winner);
    }

    function getOpponent(address player) internal view returns (address) {
        if (player == user1Address) {
            return user2Address;
        } else {
            return user1Address;
        }
    }

    function isGameOver() public view returns (bool) {
        return gameOver;
    }
}
