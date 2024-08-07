import axios from "axios";

const apiBackend = axios.create({
  baseURL: "http://localhost:8000", // error handling with https or Http
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Get Data from API
export async function BackendAPIData(endpoint) {
  try {
    const bResponse = await apiBackend.get(endpoint);
    return { bStatus: "success", bRes: bResponse.data };
  } catch (error) {
    return { bStatus: "failed", bRes: "server not running" };
  }
}
