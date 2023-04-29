// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract Waveportal {
    int256 noofwaves;

    constructor() {
        console.log("smart contract deployed");
    }

    function wave() public {
        noofwaves = noofwaves += 1;
        console.log("%s has waved", msg.sender);
    }

    function getnoofwaves() public view returns (int256) {
        return noofwaves;
    }
}
