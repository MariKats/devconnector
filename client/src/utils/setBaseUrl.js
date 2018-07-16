import axios from "axios";

const setBaseUrl = () => {
  axios.defaults.baseURL = "http://localhost:5000/api";
};

export default setBaseUrl;
