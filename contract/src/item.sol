// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import {ERC4097} from "./ERC4907.sol";

contract Item is ERC4097 {
    constructor(
        string memory name_,
        string memory symbol_
    ) ERC4097(name_, symbol_) {}
}
