import httpApi from "../authentication/httpApi";


export const getEvents = async () => {
  try {
    const response = await httpApi.get('/Events');
    const data = response.data;
    return data.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};
