import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { usePrivy } from "@privy-io/react-auth";
import { useEffect } from "react";
import { logout, setAuthenticated, setUser } from "@/app/features/auth/authSlice";
import { PrivyUser } from "../../types/global.types";

const toISOStringSafe = (value: unknown): string | null | undefined => {
    if (value instanceof Date) {
        return value.toISOString();
    }
    if (typeof value === 'string') {
        return value;
    }
    return null;
};

export const useAuth = () => {
    const dispatch = useDispatch();
    const { ready, authenticated, login, user, logout: privyLogout } = usePrivy();
    const authState = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        if (ready) {

            dispatch(setAuthenticated(authenticated));

            if (user) {
                const sanitizedUser: PrivyUser = {
                    id: user.id,
                    createdAt: toISOStringSafe(user.createdAt) || undefined,
                    email: user.email ? { address: user.email.address } : undefined,
                    linkedAccounts: user.linkedAccounts?.map(account => ({
                        provider: account.type, // or `type`
                        verifiedAt: toISOStringSafe(account.verifiedAt),
                    })) || [],
                };
                dispatch(setUser(sanitizedUser));
            } else {
                dispatch(setUser(null));
            }
        }
    }, [ready, authenticated, user, dispatch]);

    const handleLogin = async () => {
        try {
            await login();
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    const handleLogout = async () => {
        try {
            console.log("Logging out...");
            await privyLogout(); 
            console.log("Privy logout complete.");
            dispatch(logout()); 
            console.log("Redux state updated.");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return {
        isAuthenticated: authState.isAuthenticated,
        user: authState.user,
        loading: authState.loading,
        login: handleLogin,
        logout: handleLogout,
    };
};