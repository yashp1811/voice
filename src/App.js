import React, { useState } from 'react';
import { makeCall } from './services/twilioService';
import './index.css';

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [conversation, setConversation] = useState([]);

  const handleCall = async () => {
    try {
      const response = await makeCall(phoneNumber);
      console.log('Call started:', response);
    } catch (error) {
      console.error('Error making call:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Voicebot Interface</h1>
      
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Enter phone number"
        className="border border-gray-300 rounded-lg p-2 mb-4 w-full max-w-sm"
      />
      
      <button
        onClick={handleCall}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Call Borrower
      </button>
      
      <div className="mt-8 w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4">Conversation</h2>
        <ul className="space-y-2">
          {conversation.map((conv, index) => (
            <li key={index} className="bg-white p-4 rounded-lg shadow">
              <strong>Bot:</strong> {conv.response.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
