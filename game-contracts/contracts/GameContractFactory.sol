// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "./GameContract.sol";

contract GameFactory {
    CardGame[] public games;

    event GameCreated(address indexed gameAddress, uint indexed gameId);

    function createNewGame() public returns (address) {
        CardGame cardGame = new CardGame();
        games.push(cardGame);

        emit GameCreated(address(cardGame), games.length - 1);
        return address(cardGame);
    }

    function getNumberOfGames() public view returns (uint) {
        return games.length;
    }

    function getGameAddress(uint index) public view returns (address) {
        require(index < games.length, "Invalid index");
        return address(games[index]);
    }

    function getLastGameAddress() public view returns (address) {
        require(games.length > 0, "No games");
        return address(games[games.length - 1]);
    }
}
