import axios from "axios";
//https://goldfish-app-zgu69.ondigitalocean.app/
const client = axios.create({
  baseURL: "http://localhos:3001/",
});

export default client;
