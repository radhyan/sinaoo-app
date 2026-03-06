const configuredBaseUrl = import.meta.env.VITE_API_BASE_URL?.replace(/\/+$/, "");
const API_BASE_URL =
  configuredBaseUrl || (import.meta.env.PROD ? "" : "http://localhost:3000");

export function apiUrl(path) {
  if (!path) return API_BASE_URL;
  if (!API_BASE_URL) return path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
