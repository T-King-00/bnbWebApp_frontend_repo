import {create} from "zustand";

export const useAuthStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,

    setAuthLoading: (isLoading) => set({isLoading}),
    onLoginSuccess: (user) => set({
        user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
    }),
    onLoginFailure: (error) => set({
        error,
        isAuthenticated: false,
        isLoading: false,
    }),
    onLogout: () => set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
    }),
}));
