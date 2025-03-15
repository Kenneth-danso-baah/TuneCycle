export interface LinkedAccount {
    provider: string; // or `type`, depending on your choice
    verifiedAt?: string | null;
}

export interface PrivyUser {
    id: string;
    email?: { address: string };
    createdAt?: string;
    linkedAccounts?: LinkedAccount[];
}