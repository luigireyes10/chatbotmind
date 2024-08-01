import axios from 'axios';

export const postDataApi = async (endpoint: string, context: any, data: any) => {
  try {
    const response = await axios.post(`http://localhost:4005${endpoint}`, data);
    return response.data;
  } catch (error) {
    if (context && context.fetchError) {
      context.fetchError(error.message);
    }
    throw error;
  }
};
