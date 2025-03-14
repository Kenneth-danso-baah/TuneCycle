// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ERC4097 is ERC721 {
    struct UserInfo {
        address user; // address of user role
        uint64 expires; // unix timestamp, user expires
    }
    mapping(uint256 => UserInfo) private _users;

    constructor(
        string memory name_,
        string memory symbol_
    ) ERC721(name_, symbol_) {}

    mapping(uint256 tokenId => string tokenUri) private s_tokenIdToUri;
    uint256 public s_tokenCounter;

    function mintNft(string memory tokenUri) public {
        s_tokenIdToUri[s_tokenCounter] = tokenUri;
        _safeMint(msg.sender, s_tokenCounter);
        s_tokenCounter = s_tokenCounter + 1;
    }

    function setUser(
        uint256 tokenId,
        address user,
        uint64 expires
    ) public virtual {
        require(
            _ownerOf(tokenId) == msg.sender ||
                _getApproved(tokenId) == msg.sender,
            "ERC721: caller is not owner nor approved"
        );
        require(userOf(tokenId) == address(0), "User already assigned");
        require(expires > block.timestamp, "expires should be in future");
        UserInfo storage info = _users[tokenId];
        info.user = user;
        info.expires = expires;
    }

    function userOf(uint256 tokenId) public view virtual returns (address) {
        if (uint256(_users[tokenId].expires) >= block.timestamp) {
            return _users[tokenId].user;
        }
        return address(0);
    }

    function userExpires(
        uint256 tokenId
    ) public view virtual returns (uint256) {
        return _users[tokenId].expires;
    }

    function _update(
        address to,
        uint256 tokenId,
        address auth
    ) internal virtual override returns (address results) {
        address from = _ownerOf(tokenId);
        results = super._update(to, tokenId, auth);

        if (
            from != to &&
            _users[tokenId].user != address(0) && //user still present
            block.timestamp >= _users[tokenId].expires // user expired
        ) {
            delete _users[tokenId];
        }
    }
}
