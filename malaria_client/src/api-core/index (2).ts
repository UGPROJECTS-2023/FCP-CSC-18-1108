import axios from "axios";
import { API_URL } from "@/config/index";

const userBase = `${API_URL}/api/users`;

export function getMe() {
  return axios
    .get(`${userBase}/me`, {
      withCredentials: true,
    })
    .then((res) => res.data)
    .catch(() => {
      return null;
    });
}
