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

export interface PaginationStateProps{
    currentPage:number;
    itemsPerPage:number;
    totalItems:number;
}

export interface PaginationFunctionProps{
    currentPage:number;
    totalPages: number;
    onPrev:()=>void;
    onNext:()=>void;
    onGoToPage: (pageIndex: number)=>void;
}

export interface ProfilesProps{
  name:string;
  profession:string;
  email:string;
  firstName:string;
  lastName:string;
  dateOfBirth:string;
  mobilePhone:string;
}
