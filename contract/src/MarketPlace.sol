// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "./item.sol";

contract MarketPlace {
    struct Listing {
        address owner;
        uint256 price;
        bool isListed;
    }

    Item private _itemContract;
    mapping(uint256 => Listing) private _listings;

    constructor(address itemContractAddress) {
        _itemContract = Item(itemContractAddress);
    }

    function list(uint256 tokenId, uint256 price) public {
        require(
            _itemContract.ownerOf(tokenId) == msg.sender,
            "Only the owner can list the NFT"
        );
        _listings[tokenId] = Listing({
            owner: msg.sender,
            price: price,
            isListed: true
        });
    }

    function rent(uint256 tokenId, uint64 expires) public payable {
        Listing storage listing = _listings[tokenId];
        require(listing.isListed, "NFT is not listed for rent");
        require(msg.value < listing.price, "Incorrect rental price");

        payable(listing.owner).transfer(msg.value);

        _itemContract.setUser(tokenId, msg.sender, expires);

        listing.isListed = false;
    }
}
