import "./LoginPage.css";
import {useState} from "react";
import {AlertCircle, BedDouble, Eye, EyeOff, LoaderCircle, LogIn, ShieldCheck} from "lucide-react";
import {Login} from "@/API/PostAPIs.jsx";
import {useLocation, useNavigate} from "react-router";
import {useAuthStore} from "@/store/authStore.js";

const defaultFormValues = {
    email: "",
    password: "",
    rememberMe: false,
};

function getLoginErrorMessage(error) {
    if (typeof error === "string") {
        return error;
    }

    return error?.message
        || error?.title
        || error?.detail
        || "We could not sign you in. Check your email and password.";
}

function LoginPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || "/";
    const routeMessage = location.state?.message;

    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const isLoading = useAuthStore((state) => state.isLoading);
    const setAuthLoading = useAuthStore((state) => state.setAuthLoading);
    const onLoginSuccess = useAuthStore((state) => state.onLoginSuccess);
    const onLoginFailure = useAuthStore((state) => state.onLoginFailure);

    const [formValues, setFormValues] = useState(defaultFormValues);
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (event) => {
        const {name, value, checked, type} = event.target;

        setFormValues((currentValues) => ({
            ...currentValues,
            [name]: type === "checkbox" ? checked : value,
        }));

        if (errorMessage) {
            setErrorMessage("");
        }
    };

    const handleLogin = async (event) => {
        event.preventDefault();

        const email = formValues.email.trim();
        const password = formValues.password;

        if (!email || !password) {
            setErrorMessage("Enter both your email and password to continue.");
            return;
        }

        setAuthLoading(true);
        setErrorMessage("");

        try {
            const response = await Login({
                email,
                password,
                rememberMe: formValues.rememberMe,
            });

            onLoginSuccess(response.data?.user ?? {email});
            navigate(from, {replace: true});
        }
        catch (error) {
            const message = getLoginErrorMessage(error);

            setErrorMessage(message);
            onLoginFailure(error);
        }
    };

    if (isAuthenticated) {
        return (
            <section className="login-page">
                <div className="login-page__ambient login-page__ambient--primary"/>
                <div className="login-page__ambient login-page__ambient--accent"/>

                <div className="login-card" aria-labelledby="logged-in-title">
                    <div className="login-card__brand">
                        <span className="login-card__logo">B&B</span>
                        <span className="login-card__eyebrow text-orange-500">Guest access</span>
                    </div>

                    <div className="login-card__status" aria-hidden="true">
                        <ShieldCheck size={34}/>
                    </div>

                    <div className="login-card__header">
                        <h1 id="logged-in-title">You are already signed in</h1>
                        <p>You can continue to your previous page or browse available rooms.</p>
                    </div>

                    <div className="login-form login-form--actions">
                        <button
                            type="button"
                            onClick={() => navigate(from)}
                            className="login-form__button login-form__button--icon"
                        >
                            Continue
                            <LogIn size={20}/>
                        </button>

                        <button
                            type="button"
                            onClick={() => navigate("/rooms")}
                            className="login-form__button login-form__button--icon login-form__button--secondary"
                        >
                            <BedDouble size={20}/>
                            Browse rooms
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="login-page">
            <div className="login-page__ambient login-page__ambient--primary"/>
            <div className="login-page__ambient login-page__ambient--accent"/>

            <div className="login-card" aria-labelledby="login-title">
                <div className="login-card__brand">
                    <span className="login-card__logo">B&B</span>
                    <span className="login-card__eyebrow text-orange-500">Guest access</span>
                </div>

                <div className="login-card__header">
                    <h1 id="login-title">Welcome back</h1>
                    <p>Sign in to manage your stay, bookings, and breakfast preferences.</p>
                </div>

                {routeMessage && (
                    <div className="login-alert login-alert--info" role="status">
                        <ShieldCheck size={18}/>
                        <span>{routeMessage}</span>
                    </div>
                )}

                {errorMessage && (
                    <div className="login-alert login-alert--error" role="alert">
                        <AlertCircle size={18}/>
                        <span>{errorMessage}</span>
                    </div>
                )}

                <form className="login-form" onSubmit={handleLogin}>
                    <div className="login-form__field">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleInputChange}
                            placeholder="you@example.com"
                            autoComplete="email"
                            disabled={isLoading}
                        />
                    </div>

                    <div className="login-form__field">
                        <label htmlFor="password">Password</label>
                        <div className="login-form__input-wrap">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={formValues.password}
                                onChange={handleInputChange}
                                placeholder="Enter your password"
                                autoComplete="current-password"
                                disabled={isLoading}
                            />
                            <button
                                type="button"
                                className="login-form__password-toggle"
                                onClick={() => setShowPassword((currentValue) => !currentValue)}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                                disabled={isLoading}
                            >
                                {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
                            </button>
                        </div>
                    </div>

                    <div className="login-form__meta">
                        <label className="login-form__remember">
                            <input
                                type="checkbox"
                                name="rememberMe"
                                checked={formValues.rememberMe}
                                onChange={handleInputChange}
                                disabled={isLoading}
                            />
                            <span>Remember me</span>
                        </label>
                        <a href="mailto:support@example.com">Forgot password?</a>
                    </div>

                    <button
                        type="submit"
                        className="login-form__button login-form__button--icon"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <LoaderCircle className="login-form__spinner" size={20}/>
                                Signing in
                            </>
                        ) : (
                            <>
                                Login
                                <LogIn size={20}/>
                            </>
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default LoginPage;
