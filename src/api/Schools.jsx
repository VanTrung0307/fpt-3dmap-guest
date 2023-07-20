// api.js


const API_BASE_URL = "http://anhkiet-001-site1.htempurl.com/api";

export const getSchools = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/Schools`);
    const data = await response.json();
    // console.log(data.data);
    return data.data;
  } catch (error) {
    console.error('Error fetching schools:', error);
    throw error;
  }
};

export const getSchoolsPagination = async (page) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/Schools/school/pagination?page=${page}`
    );
    const data = await response.data.data;
    return data;
  } catch (error) {
    console.error("Error fetching paginated schools:", error);
    throw error;
  }
};

export const getSchoolById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/Schools/${id}`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(`Error fetching school with ID ${id}:`, error);
    throw error;
  }
};

export const updateSchool = async (id, schoolData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/Schools/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(schoolData),
    });
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(`Error updating school with ID ${id}:`, error);
    throw error;
  }
};

export const createSchool = async (schoolData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/Schools/school`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(schoolData),
    });
    const data = await response.data;
    return data;
  } catch (error) {
    console.error("Error creating school:", error);
    throw error;
  }
};
