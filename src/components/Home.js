import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Home = () => {
    const navigate = useNavigate();
    const auth = getAuth();

    const handleLogin = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/dashboard'); // Navigate on successful login
        } catch (error) {
            console.error('Failed to login:', error);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center my-8 text-green-600">Welcome to SkillSwap!</h1>
            <p className="text-lg text-center my-4 text-gray-800">
                A community-driven platform where you can exchange skills and knowledge. Learn something new or share your expertise with others.
            </p>
            <div className="flex justify-center mt-8">
                {/* Simulate login on button click, replace with actual form handling */}
                <button onClick={() => handleLogin('test@example.com', 'password123')} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mx-2 transition duration-150 ease-in-out">
                    Log In
                </button>
            </div>
        </div>
    );
};

export default Home;
