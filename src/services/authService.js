
import api from "./api";

export const authService = {
  login: credentials => api.post("/auth/login", credentials),
  register: details => api.post("/auth/register", details)
};
