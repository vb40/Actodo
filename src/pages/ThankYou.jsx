import React from 'react';
import { useHistory } from 'react-router-dom';

function ThankYou() {
    const history = useHistory();

    const handleBackToHome = () => {
        history.push("/landing"); // Redirect to landing or home page
    };

    return (
        <div className="bg-black p-16 min-h-screen flex flex-col items-center justify-center">
            <div className="bg-[#EFEFEF] p-10 border rounded-md text-center">
                <h1 className="text-3xl font-medium mb-4">Thank You for Using Actodo!</h1>
                <button 
                    onClick={handleBackToHome}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                    Back to Home
                </button>
            </div>
        </div>
    );
}

export default ThankYou;
