import axios from 'axios';

export const makeCall = async (to) => {
  try {
    const response = await axios.post('http://localhost:5000/make-call', {
      to,
      from: process.env.REACT_APP_TWILIO_PHONE_NUMBER,
      twimlUrl: 'http://twimlets.com/holdmusic?Bucket=com.twilio.music.ambient'

    });
    return response.data;
  } catch (error) {
    console.error('Error making call:', error);
    throw error;
  }
};
