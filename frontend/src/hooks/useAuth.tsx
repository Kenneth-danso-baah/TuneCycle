import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { usePrivy } from "@privy-io/react-auth";
import { useEffect } from "react";
import { PrivyUser } from "../../types/global.types";
import { logout, setAuthenticated, setUser } from "@/app/features/auth/authSlice";

export const useAuth = () => {
    const dispatch = useDispatch();
    const { ready, authenticated, login, user, logout: privyLogout } = usePrivy();

   
    const authState = useSelector((state: RootState) => state.auth);

  
    useEffect(() => {
        if (ready) {
            console.log("Privy ready. Authenticated:", authenticated);
            console.log("User:", user);

          
            dispatch(setAuthenticated(authenticated));

           
            if (user) {
                const sanitizedUser: PrivyUser = {
                    ...user,
                    createdAt: user.createdAt instanceof Date ? user.createdAt.toISOString() : null,
                    email: user.email ? user.email.address : undefined,
                };
                dispatch(setUser(sanitizedUser));
            } else {
                dispatch(setUser(null));
            }
        }
    }, [ready, authenticated, user, dispatch]);


    const handleLogin = async () => {
        try {
            console.log("Logging in...");
            await login();
            console.log("Login complete.");
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
