
import React, { useEffect, useState } from 'react';
import { auth, firestore } from '../firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';

const Dashboard = () => {
    const [skillOffers, setSkillOffers] = useState([]);
    const [skillRequests, setSkillRequests] = useState([]);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchSkills = async () => {
            const user = auth.currentUser;
            if (user) {
                const skillsQuery = query(collection(firestore, "skills"), where("userId", "==", user.uid));
                const querySnapshot = await getDocs(skillsQuery);
                const offers = [];
                const requests = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    if (data.type === 'offer') {
                        offers.push(data.skillName);
                    } else if (data.type === 'request') {
                        requests.push(data.skillName);
                    }
                });
                setSkillOffers(offers);
                setSkillRequests(requests);
            }
        };

        fetchSkills();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center my-8 text-green-600">Your Dashboard</h1>
            {/* Skill Offers Section */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-green-500">Your Skill Offers</h2>
                <ul className="list-disc pl-5">
                    {skillOffers.map((skill, index) => (
                        <li key={index} className="mb-2 text-gray-800">{skill}</li>
                    ))}
                </ul>
            </section>

            {/* Skill Requests Section */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-green-500">Your Skill Requests</h2>
                <ul className="list-disc pl-5">
                    {skillRequests.map((skill, index) => (
                        <li key={index} className="mb-2 text-gray-800">{skill}</li>
                    ))}
                </ul>
            </section>

            {/* Notifications Section */}
            <section>
                <h2 className="text-2xl font-semibold mb-4 text-green-500">Notifications</h2>
                <ul className="list-disc pl-5">
                    {notifications.map((notification, index) => (
                        <li key={index} className="mb-2 text-gray-800">{notification}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Dashboard;
