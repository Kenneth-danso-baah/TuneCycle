// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "./item.sol";

contract MarketPlace {
    struct Listing {
        address owner;
        uint256 price;
        uint256 tokenId;
        uint64 leaseYear;
        string title;
        string music;
        string image;
        bool isListed;
    }

    Item private _itemContract;
    mapping(uint256 => Listing) private _listings;

    Listing[] public s_allListing;

    mapping(address => Listing[]) private s_eachListing;

    constructor(address itemContractAddress) {
        _itemContract = Item(itemContractAddress);
    }

    function mint(
        string memory musicFile,
        string memory coverImage,
        string memory title,
        uint256 amount,
        uint64 leaseYear
    ) public {
        _itemContract.mintNft(musicFile);

        Listing memory newListing = Listing({
            owner: msg.sender,
            price: amount,
            tokenId: _itemContract.s_tokenCounter(),
            title: title,
            music: musicFile,
            image: coverImage,
            leaseYear: leaseYear,
            isListed: false
        });
        s_eachListing[msg.sender].push(newListing);
        s_allListing.push(newListing);
    }

    function list(uint256 _id) public {
        Listing storage listing = s_eachListing[msg.sender][_id];
        Listing storage allListing = s_allListing[_id];
        require(
            _itemContract.ownerOf(listing.tokenId) == msg.sender,
            "Only the owner can list the NFT"
        );

        listing.isListed = true;
        allListing.isListed = true;
        // Create a memory copy for the all users array
        // Listing memory newListing = Listing({
        //     owner: msg.sender,
        //     price: price,
        //     isListed: true
        // });

        // s_allListing.push(newListing);

        // _listings[tokenId] = Listing({
        //     owner: msg.sender,
        //     price: price,
        //     isListed: true
        // });
    }

    function rent(uint256 _id) public payable {
        Listing storage listing = s_eachListing[msg.sender][_id];
        Listing storage allListing = s_allListing[_id];
        require(allListing.isListed, "NFT is not listed for rent");
        require(msg.value < allListing.price, "Incorrect rental price");

        payable(allListing.owner).transfer(msg.value);

        _itemContract.setUser(
            allListing.tokenId,
            msg.sender,
            allListing.leaseYear
        );

        allListing.isListed = false;
        listing.isListed = false;
    }
}
