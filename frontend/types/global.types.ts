export type PrivyUser = {
    id?: string;
    email?: string;
    name?: string;
    createdAt?: string | null; 
};


export type BotMessgeProps = {
    text:string;
    sender: 'user' | 'bot';
}