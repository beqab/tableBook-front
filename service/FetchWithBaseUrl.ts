import { baseUrl } from "./baseUrl";

interface options {
  headers?: { [key: string]: string };
  [key: string]: any;
}

const fetchWithBaseUrl = async (endpoint: string, options: options = {}) => {
  const response = await fetch(`${baseUrl}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}), // Merge with custom headers if provided
    },
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  return response.json(); // Assuming JSON response, adapt as necessary
};

export default fetchWithBaseUrl;
