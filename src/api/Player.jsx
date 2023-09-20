import httpApi from "../authentication/httpApi";


export const getRankofPlayers = async (eventId, schoolId) => {
  try {
    const response = await httpApi.get(
      `/PlayerPrizes/GetRankedPlayer/${eventId}/${schoolId}`
    );
    const data = response.data;
    return data.data;
  } catch (error) {
    console.error("Error fetching ranked players:", error);
    throw error;
  }
};

export const getPlayers = async () => {
  try {
    const response = await httpApi.get("/Players");
    const data = response.data;
    return data.data;
  } catch (error) {
    console.error("Error fetching players:", error);
    throw error;
  }
};
