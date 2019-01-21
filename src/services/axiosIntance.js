import axios from "axios";

const token = localStorage.getItem("spotify-token");

export const instance = axios.create({
  baseURL: "https://api.spotify.com",
  timeout: 10000,
  headers: { Authorization: "Bearer " + token }
});
