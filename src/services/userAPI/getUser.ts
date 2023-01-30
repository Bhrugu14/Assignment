// A mock function to mimic making an async request for data
import axios from "axios";
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export const getUsers = async () => {
  try {
    const response = await axios.get("https://demo-aes6.vercel.app/employees");
    console.log({ response });
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
