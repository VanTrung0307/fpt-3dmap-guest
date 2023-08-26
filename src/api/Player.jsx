const API_BASE_URL = "https://anhkiet-001-site1.htempurl.com/api";

export const getRankofPlayers = async (eventId, schoolId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/Players/GetRankedPlayer/${eventId}/${schoolId}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching ranked players:', error);
    throw error;
  }
};

export const getPlayers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/Players`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching players:', error);
    throw error;
  }
};