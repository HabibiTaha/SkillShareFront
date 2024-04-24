import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const auth = getAuth();
    const firestore = getFirestore();
    const user = auth.currentUser;

    useEffect(() => {
        const fetchProfile = async () => {
            if (user) {
                const docRef = doc(firestore, "users", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setProfile(docSnap.data());
                } else {
                    console.log("No such document!");
                }
            }
        };

        fetchProfile();
    }, [user]);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold">Profile Page</h1>
            {profile ? (
                <div>
                    <p>Name: {profile.name}</p>
                    <p>Email: {profile.email}</p>
                    {/* Display other user information */}
                </div>
            ) : (
                <p>Loading profile...</p>
            )}
        </div>
    );
};

export default Profile;
