import "./LoginPage.css";
import {useEffect} from "react";
import {BedDouble, Home, LogIn, LogOut} from "lucide-react";
import {useNavigate} from "react-router";
import {useAuthStore} from "@/store/authStore.js";

export function Logout() {
    const navigate = useNavigate();
    const onLogout = useAuthStore((state) => state.onLogout);

    useEffect(() => {
        onLogout();
    }, [onLogout]);

    return (
        <section className="login-page">
            <div className="login-page__ambient login-page__ambient--primary"/>
            <div className="login-page__ambient login-page__ambient--accent"/>

            <div className="login-card" aria-labelledby="logout-title">
                <div className="login-card__brand">
                    <span className="login-card__logo">B&B</span>
                    <span className="login-card__eyebrow text-orange-500">Session ended</span>
                </div>

                <div className="logout-card__status" aria-hidden="true">
                    <LogOut size={34}/>
                </div>

                <div className="login-card__header">
                    <h1 id="logout-title">You are signed out</h1>
                    <p>Your account session has been cleared. You can sign in again or continue browsing rooms.</p>
                </div>

                <div className="login-form login-form--actions">
                    <button
                        type="button"
                        onClick={() => navigate("/login")}
                        className="login-form__button login-form__button--icon"
                    >
                        <LogIn size={20}/>
                        Sign in again
                    </button>

                    <button
                        type="button"
                        onClick={() => navigate("/rooms")}
                        className="login-form__button login-form__button--icon login-form__button--secondary"
                    >
                        <BedDouble size={20}/>
                        Browse rooms
                    </button>

                    <button
                        type="button"
                        onClick={() => navigate("/")}
                        className="login-form__button login-form__button--icon login-form__button--ghost"
                    >
                        <Home size={20}/>
                        Home
                    </button>
                </div>
            </div>
        </section>
    );
}
