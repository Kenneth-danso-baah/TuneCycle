export interface LinkedAccount {
    provider: string;
    verifiedAt?: string | null;
}

export interface PrivyUser {
    id: string;
    email?: { address: string };
    createdAt?: string;
    linkedAccounts?: LinkedAccount[];
}


export type BotMessgeProps = {
    text:string;
    sender: 'user' | 'bot';
}

export interface Listing {
  owner: string;
  price: bigint;
  tokenId: bigint;
  leaseYear: bigint;
  artiste?:string;
  title: string;
  music: string;
  image: string;
  genre: string;
  isListed: boolean;
}