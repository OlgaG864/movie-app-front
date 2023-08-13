import axios from "axios";
//https://goldfish-app-zgu69.ondigitalocean.app/
const client = axios.create({
  baseURL: "http://goldfish-app-zgu69.ondigitalocean.app/api",
});

export default client;
