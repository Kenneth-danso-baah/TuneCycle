// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import {Script, console} from "forge-std/Script.sol";
import "../src/MarketPlace.sol";
import "../src/item.sol"; // Import the Item contract if needed

contract DeployMarketPlace is Script {
    function run() external {
        vm.startBroadcast();

        // Deploy the Item contract first
        Item itemContract = new Item("ItemName", "ITEM");
        address itemContractAddress = address(itemContract);

        // Now deploy the MarketPlace contract with the Item contract address
        MarketPlace marketPlace = new MarketPlace(itemContractAddress);

        vm.stopBroadcast();

        // Log the addresses of the deployed contracts
        console.log("Item contract deployed at:", itemContractAddress);
        console.log("MarketPlace contract deployed at:", address(marketPlace));
    }
}
