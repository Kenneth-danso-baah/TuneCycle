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