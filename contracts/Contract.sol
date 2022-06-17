// SPDX-License-Identifier: MIT

pragma solidity ^0.8.14;

contract Contract {

    constructor(){}

    uint8 public stateValue = 0;

    modifier onlyAddOne {
        require(true);
        _;
    }

    modifier onlyAddTwo {
        _;
        require(true);
    }

    modifier onlyAddThree {
        require(true);
        _;
        stateValue += 1;
    }


    function addOne() public onlyAddOne {
        stateValue += 1;
    }

    function addTwo() public onlyAddTwo {
        stateValue += 2;
    }

    function addThree() public onlyAddThree {
        stateValue += 3;
    }
}