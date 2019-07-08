import axios from "axios";

// baseURL --> A standart url prefix

const api = axios.create({
  baseURL: "https://api.github.com/"
});

export default api;
