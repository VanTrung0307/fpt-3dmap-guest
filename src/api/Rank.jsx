const API_BASE_URL = "https://anhkiet-001-site1.htempurl.com/api";

export const getRanks = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/Ranks`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching ranks:', error);
    throw error;
  }
};