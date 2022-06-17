// SPDX-License-Identifier: MIT

pragma solidity ^0.8.14;

contract Contract {

    constructor(){}

    uint8 public stateValue = 0;

    modifier onlyTrue {
        require(true);
        _;
    }

    function addOne() public onlyTrue {
        stateValue += 1;
    }

}