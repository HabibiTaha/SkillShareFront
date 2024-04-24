import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const auth = getAuth();

    const handleSignIn = async (event) => {
        event.preventDefault();
        setError(''); // Clear previous errors

        if (!email || !password) {
            setError("Both email and password are required");
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Login successful!");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center my-8">Sign In</h1>
            <form onSubmit={handleSignIn}>
                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="input input-bordered input-primary w-full max-w-xs"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="input input-bordered input-primary w-full max-w-xs"
                    />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary mt-4">Sign In</button>
                </div>
                {error && <p className="text-red-500">{error}</p>}
            </form>
        </div>
    );
};

export default SignIn;
