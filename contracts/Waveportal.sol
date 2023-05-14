// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract Waveportal {
    int noofwaves;

    struct Wave {
        address waver;
        string message;
        uint timestamps;
    }
    Wave[] waves;

    constructor() {
        console.log("smart contract deployed");
    }

    event logWave(address indexed waver, string message, uint timestamps);

    function wave(string memory message) public {
        noofwaves = noofwaves += 1;
        waves.push(Wave(msg.sender, message, block.timestamp));
        console.log("%s has waved", msg.sender);
        emit logWave(msg.sender, message, block.timestamp);
    }

    function getnoofwaves() public view returns (int256) {
        return noofwaves;
    }

    function getWaves() public view returns (Wave[] memory) {
        return waves;
    }
}
