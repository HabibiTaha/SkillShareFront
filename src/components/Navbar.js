import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const Navbar = () => {
    const auth = getAuth();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log('User signed out successfully');
            // Handle navigation or state updates here
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };
    return (
        <nav className="bg-green-500">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-white text-lg">
                    <Link to="/" className="font-semibold">SkillSwap</Link>
                </div>
                <ul className="flex items-center">
                    <li className="text-white ml-6">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="text-white ml-6">
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li className="ml-6">
                        <button onClick={handleLogout} className="text-white bg-transparent">
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
