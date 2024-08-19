import axios from 'axios';

const INFER_API_BASE_URL = 'https://api.infer.so/v1';
const apiKey = process.env.REACT_APP_INFER_SO_API_KEY;

export const sendQuery = async (query) => {
  try {
    const response = await axios.post(
      `${INFER_API_BASE_URL}/query`,
      { query },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error sending query to Infer.so:', error);
    throw error;
  }
};
