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

    enum GameStatus {
        NOTSTARTED,
        STARTED,
        FINISHED
    }

    mapping(uint256 => Card) public cards;

    constructor() {
        for (uint256 i = 0; i < 10; i++) {
            cards[i] = Card(
                i,
                (((block.timestamp * (i + 7)) % 9) + 1),
                (((block.prevrandao * (i + 4)) % 8) + 2),
                true,
                true
            );
            if (i < 5) {
                user1Cards.push(i);
            } else {
                user2Cards.push(i);
            }
        }
    }

    address public user1Address;
    address public user2Address;

    bool public user1IsEntered;
    bool public user2IsEntered;

    // false => player1, true => player2
    bool public whoseTurn;
    bool public gameOver;
    GameStatus public gameStatus = GameStatus.NOTSTARTED;

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
        require(
            gameStatus != GameStatus.NOTSTARTED,
            "Game has not started yet!"
        );
        _;
    }

    modifier GameOver() {
        require(!gameOver, "game over");
        _;
    }

    function enter(address player) public GameOver {
        require(gameStatus == GameStatus.NOTSTARTED, "Game already started!");

        if (!user1IsEntered) {
            user1Address = player;
            user1IsEntered = true;
        } else if (!user2IsEntered) {
            user2Address = player;
            user2IsEntered = true;
            gameStatus = GameStatus.STARTED;
            emit GameStarted();
        }
    }

    function attack(
        uint attackerId,
        uint defenderId,
        address attacker
    ) public gameNotInProgress GameOver {
        require(
            (attacker == user1Address && !whoseTurn) ||
                (attacker == user2Address && whoseTurn),
            "Not your turn"
        );
        require(cards[defenderId].isAlive, "This card is not alive");
        require(cards[attackerId].isAlive, "This card is not alive");

        if (cards[defenderId].health <= cards[attackerId].power) {
            cards[defenderId].isAlive = false;
            if (user1Address == attacker) {
                user1DeadCardCount++;
            }
            if (user2Address == attacker) {
                user2DeadCardCount++;
            }
            if (user1DeadCardCount == 5) {
                winner = user2Address;
                gameOver = true;
                emit GameOvered(winner);
            } else if (user2DeadCardCount == 5) {
                winner = user1Address;
                gameOver = true;
                emit GameOvered(winner);
            }
        } else {
            cards[defenderId].health -= cards[attackerId].power;
        }
        whoseTurn = !whoseTurn;
    }

    function isGameOver() public view returns (bool) {
        return gameOver;
    }

    struct CardExtended {
        uint256 id;
        uint power;
        uint health;
        bool isAlive;
        bool isTaken;
        address player;
    }

    function getAllCardList() public view returns (CardExtended[] memory) {
        CardExtended[] memory cardList = new CardExtended[](10);
        for (uint i = 0; i < 10; i++) {
            cardList[i] = CardExtended(
                cards[i].id,
                cards[i].power,
                cards[i].health,
                cards[i].isAlive,
                cards[i].isTaken,
                i < 5 ? user1Address : user2Address
            );
        }
        return cardList;
    }
}
