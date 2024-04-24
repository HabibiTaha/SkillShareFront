import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const auth = getAuth();

    const handleSignUp = async (event) => {
        event.preventDefault();
        setError(''); // Clear previous errors

        if (!email || !password) {
            setError("Email and password are required");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Sign up successful! You can now log in.");
            setEmail('');
            setPassword('');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center my-8">Sign Up</h1>
            <form onSubmit={handleSignUp}>
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
                    <button type="submit" className="btn btn-primary mt-4">Sign Up</button>
                </div>
                {error && <p className="text-red-500">{error}</p>}
            </form>
        </div>
    );
};

export default SignUp;
