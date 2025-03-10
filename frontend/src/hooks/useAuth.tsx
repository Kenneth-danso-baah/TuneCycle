import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { usePrivy } from "@privy-io/react-auth";
import { useEffect } from "react";
import { PrivyUser } from "../../types/global.types";
import { logout, setAuthenticated, setUser } from "@/app/features/auth/authSlice";

export const useAuth = () => {
    const dispatch = useDispatch();
    const { ready, authenticated, login, user, logout: privyLogout } = usePrivy();

    // Get the current auth state from Redux
    const authState = useSelector((state: RootState) => state.auth);

    // Sync Privy's authentication state with Redux
    useEffect(() => {
        if (ready) {
            console.log("Privy ready. Authenticated:", authenticated);
            console.log("User:", user);

            // Update Redux state with Privy's authentication state
            dispatch(setAuthenticated(authenticated));

            // Sanitize and set the user data in Redux
            if (user) {
                const sanitizedUser: PrivyUser = {
                    ...user,
                    createdAt: user.createdAt instanceof Date ? user.createdAt.toISOString() : null, // Convert Date to string
                    email: user.email ? user.email.address : undefined, // Convert Email object to string
                };
                dispatch(setUser(sanitizedUser));
            } else {
                dispatch(setUser(null));
            }
        }
    }, [ready, authenticated, user, dispatch]);

    // Handle login
    const handleLogin = async () => {
        try {
            console.log("Logging in...");
            await login();
            console.log("Login complete.");
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    // Handle logout
    const handleLogout = async () => {
        try {
            console.log("Logging out...");
            await privyLogout(); // Log out from Privy
            console.log("Privy logout complete.");
            dispatch(logout()); // Update Redux state
            console.log("Redux state updated.");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };
    

    // Return the auth state and functions
    return {
        isAuthenticated: authState.isAuthenticated,
        user: authState.user,
        loading: authState.loading,
        login: handleLogin,
        logout: handleLogout,
    };
};
