// A mock function to mimic making an async request for data
import axios from "axios";

export const getUsers = async () => {
  try {
    const response = await axios.get("https://demo-aes6.vercel.app/employees");
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
