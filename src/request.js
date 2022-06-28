import axios from "axios";

export default axios.create({
    baseURL: "https://renfoodapi.herokuapp.com/api/v1/",
    responseType: "json"
});