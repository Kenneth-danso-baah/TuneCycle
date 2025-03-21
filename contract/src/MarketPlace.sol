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
        string genre;
        string artiste;
        bool isListed;
        bool isRented;
    }

    Item private _itemContract;
    mapping(uint256 => Listing) private _listings;

    Listing[] public s_allListing;

    // mapping(address => Listing[]) private s_eachListing;

    constructor(address itemContractAddress) {
        _itemContract = Item(itemContractAddress);
    }

    function mint(
        string memory musicFile,
        string memory coverImage,
        string memory title,
        string memory genre,
        string memory artiste,
        uint256 amount,
        uint64 leaseYear,
        address reciever
    ) public {
        Listing memory newListing = Listing({
            owner: reciever,
            price: amount,
            tokenId: _itemContract.s_tokenCounter(),
            title: title,
            music: musicFile,
            image: coverImage,
            leaseYear: leaseYear,
            genre: genre,
            artiste: artiste,
            isListed: false,
            isRented: false
        });
        // s_eachListing[reciever].push(newListing);
        s_allListing.push(newListing);

        _itemContract.mintNft(musicFile, reciever);
    }

    function list(uint256 _id, address reciever) public {
        // Listing storage listing = s_eachListing[reciever][_id];
        Listing storage allListing = s_allListing[_id];
        // require(
        //     _itemContract.ownerOf(allListing.tokenId) == reciever,
        //     "Only the owner can list the NFT"
        // );

        //listing.isListed = true;
        allListing.isListed = true;
        // Create a memory copy for the all users array
        // Listing memory newListing = Listing({
        //     owner: msg.sender,
        //     price: price,
        //     isListed: true
        // });

        allListing.isRented = false;
        // s_allListing.push(newListing);

        // _listings[tokenId] = Listing({
        //     owner: msg.sender,
        //     price: price,
        //     isListed: true
        // });
    }

    function rent(uint256 _id, address reciever) public payable {
        Listing storage allListing = s_allListing[_id];
        // require(allListing.isListed, "NFT is not listed for rent");
        // require(msg.value >= allListing.price, "Incorrect rental price");

        // Calculate expiration timestamp (current time + lease years in seconds)
        uint64 expirationTime = uint64(
            block.timestamp + (allListing.leaseYear * 365 days)
        );

        payable(allListing.owner).transfer(msg.value);

        _itemContract.setUser(
            allListing.tokenId,
            reciever,
            expirationTime // Pass the expiration timestamp
        );

        allListing.isListed = false;
        allListing.isRented = true;
    }

    // Getter for s_allListing
    function getAllListings() public view returns (Listing[] memory) {
        return s_allListing;
    }

    // Getter for listings by user address
    function getUserListings(
        address user
    ) public view returns (Listing[] memory) {
        // Count listings owned by user first
        uint256 count = 0;
        for (uint256 i = 0; i < s_allListing.length; i++) {
            if (s_allListing[i].owner == user) {
                count++;
            }
        }

        // Create array of correct size and populate it
        Listing[] memory userListings = new Listing[](count);
        uint256 currentIndex = 0;
        for (uint256 i = 0; i < s_allListing.length; i++) {
            if (s_allListing[i].owner == user) {
                userListings[currentIndex] = s_allListing[i];
                currentIndex++;
            }
        }

        return userListings;
    }

    // Getter for _itemContract

    function getListingsByRentedTokens(
        address user
    ) public view returns (Listing[] memory) {
        uint256[] memory rentedTokenIds = _itemContract.getRentedTokenIdsByUser(
            user
        );
        Listing[] memory userListings = new Listing[](rentedTokenIds.length);

        for (uint256 i = 0; i < rentedTokenIds.length; i++) {
            userListings[i] = s_allListing[rentedTokenIds[i]];
        }

        return userListings;
    }
}
