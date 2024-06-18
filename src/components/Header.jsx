import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header({ username }) {
    const navigate = useNavigate();

    const handleSignOut = () => {
        // Clear authentication tokens or any user session data here
        localStorage.removeItem('authToken'); // Example: clearing token from localStorage
        navigate("/"); // Redirect to the home or login page
    };

    return (
        <div className="flex justify-between items-center mb-5">
            <div>
                <h1 className="text-3xl font-medium">Hello {username}!</h1>
                <p>I help you manage your activities :)</p>
            </div>
            <button 
                onClick={handleSignOut}
                className="bg-red-500 text-white py-2 px-4 rounded">
                Sign Out
            </button>
        </div>
    );
}

export default Header;
