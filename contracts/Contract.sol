// SPDX-License-Identifier: MIT

pragma solidity ^0.8.14;

contract Contract {

    constructor(){}

    uint8 public stateValue = 0;

    function addOne() public {
        stateValue += 1;
    }

}