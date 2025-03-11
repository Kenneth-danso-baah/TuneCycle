// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import {ERC4097} from "./ERC4907.sol";

contract Item is ERC4097 {
    uint256 private _tokenCount;

    constructor(
        string memory name_,
        string memory symbol_
    ) ERC4097(name_, symbol_) {}

    function mint() public {
        _tokenCount += 1;
        _mint(msg.sender, _tokenCount);
    }
}
