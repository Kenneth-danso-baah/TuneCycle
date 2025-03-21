"use client"

import { getContract } from "viem";
import { contractAbi, contractAddress } from "./abi";
import { client } from "./client";   

// address owner;
// uint256 price;
// uint256 tokenId;
// uint64 leaseYear;
// string title;
// string music;
// string image;
// string genre;
// string artiste;
// bool isListed;
// bool isRented;
interface Profiles {
     name : string;
     profession: string;
     email: string;
     firstName: string;
     lastName: string;
     dateOfBirth: string;
     mobilePhone: string;
}


interface Listing {
    owner:string;
    price:bigint;
    tokenId: bigint;
    leaseYear:bigint;
    title:string;
    music: string;
    image:string;
    genre:string;
    artiste:string;
    isListed:boolean;
    isRented: boolean;
}

export async function readContractData(userAddress: `0x${string}`): Promise<[string, string, string, string, string, string, string, string,string,string,string,string, boolean] | null> {
   
    try {
        const contract = getContract({
            address: contractAddress,
            abi: contractAbi,
            client,
        });

        const data = await contract.read.getMyName([userAddress]);

        console.log("Smart Contract Data:", data);

        if (typeof data === "object"
             && data !== null 
             && "firstName" in data 
             && "lastName" in data 
             && "gender" in data 
             && "dateOfBirth" in data 
             && "imageUrl" in data 
             && "xHandle" in data 
             && "facebookHandle" in data 
             && "igHandle" in data 
             && "location" in data
             && "email" in data
             && "phone" in data
             && "userAddress" in data
             && "hasName" in data
            ) {
          
            return [data.firstName, data.lastName,data.gender,data.dateOfBirth,data.imageUrl,data.xHandle,data.facebookHandle,data.igHandle,data.location,data.email,data.phone,data.userAddress,data.hasName] as [string, string,string,string,string,string,string,string,string,string,string,string,boolean];
        } else {
           
            return null;
        }
    } catch (error) {
     
        console.error("Error reading contract:", error);
        return null;
    }
} 



export async function readUserListings(userAddress: `0x${string}`): Promise<Listing[] | null> {
    try {
        const contract = getContract({
            address: contractAddress,
            abi: contractAbi,
            client,
        });

        const data = await contract.read.getUserListings([userAddress]);

        console.log("History Data:", data);

        if (Array.isArray(data)) {
            return data as Listing[];
        } else {
            
            return null;
        }
    } catch (error) {
        
        console.error("Error reading history:", error);
        return null;
    }
}

export async function readListingsByRentedTokens(userAddress: `0x${string}`): Promise<Listing[] | null> {
    try {
        const contract = getContract({
            address: contractAddress,
            abi: contractAbi,
            client,
        });

        const data = await contract.read.getListingsByRentedTokens([userAddress]);

        console.log("History Data:", data);

        if (Array.isArray(data)) {
            return data as Listing[];
        } else {
            
            return null;
        }
    } catch (error) {
        
        console.error("Error reading history:", error);
        return null;
    }
}

export async function readListings(): Promise<Listing[] | null> {
    try {
        const contract = getContract({
            address: contractAddress,
            abi: contractAbi,
            client,
        });

        const data = await contract.read.getAllListings();

        console.log("History Data:", data);

        if (Array.isArray(data)) {
            return data as Listing[];
        } else {
            
            return null;
        }
    } catch (error) {
        
        console.error("Error reading history:", error);
        return null;
    }
}
 
export async function readUserProfile(userAddress: `0x${string}`): Promise<Profiles | null> {
    try {
        const contract = getContract({
            address: contractAddress,
            abi: contractAbi,
            client,
        });

        const data = await contract.read.getUserProfile([userAddress]);

        console.log("User Profile Data:", data);

        if (typeof data === "object" && data !== null) {
            return data as Profiles; // Ensure you have a Profiles type defined
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error reading user profile:", error);
        return null;
    }
}

