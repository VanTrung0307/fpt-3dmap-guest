// api.js

import httpApi from "../authentication/httpApi";

export const getSchools = async () => {
  try {
    const response = await httpApi.get("/Schools");
    const data = response.data;
    return data.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};
