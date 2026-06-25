import "./LoginPage.css";

function LoginPage() {
    return (
        <section className="login-page">
            <div className="login-page__ambient login-page__ambient--primary" />
            <div className="login-page__ambient login-page__ambient--accent" />

            <div className="login-card" aria-labelledby="login-title">
                <div className="login-card__brand">
                    <span className="login-card__logo">B&B</span>
                    <span className="login-card__eyebrow text-orange-500">Guest access</span>
                </div>

                <div className="login-card__header">
                    <h1 id="login-title">Welcome back</h1>
                    <p>Sign in to manage your stay, bookings, and breakfast preferences.</p>
                </div>

                <form className="login-form">
                    <div className="login-form__field">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="you@example.com"
                            autoComplete="email"
                        />
                    </div>

                    <div className="login-form__field">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            autoComplete="current-password"
                        />
                    </div>

                    <div className="login-form__meta">
                        <label className="login-form__remember">
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </label>
                        <a href="#">Forgot password?</a>
                    </div>

                    <button type="submit" className="login-form__button">
                        Login
                    </button>
                </form>
            </div>
        </section>
    );
}

export default LoginPage;
