import axios from "axios";

const API_URL = "http://localhost:3000/data";

export const getProfiles = async () => {
  try {
    const res = await axios.get(`${API_URL}/profiles`);
    return res.data;
  } catch (error) {
    console.error("Error fetching profiles:", error);
    throw error;
  }
};

export const getProfileById = async (id, lang) => {
  try {
    const res = await axios.get(`${API_URL}/profiles/${id}/${lang}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching profile by ID:", error);
    throw error;
  }
};

export const addProfile = async (profile) => {
  try {
    const res = await axios.post(`${API_URL}/profiles`, profile);
    return res.data;
  } catch (error) {
    console.error("Error adding profile:", error);
    throw error;
  }
};

export const updateProfile = async (id, lang, profile) => {
  try {
    const res = await axios.put(`${API_URL}/profiles/${id}/${lang}`, profile);
    return res.data;
  } catch (error) {
    console.error("Error updating profile:", error);
    throw error;
  }
};

export const deleteProfile = async (id, lang) => {
  try {
    const res = await axios.delete(`${API_URL}/profiles/${id}/${lang}`);
    return res.data;
  } catch (error) {
    console.error("Error deleting profile:", error);
    throw error;
  }
};
