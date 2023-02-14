import axios from "axios";

const employeeApi = axios.create({
  baseURL: "https://employee--api.herokuapp.com/api/",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});

export default employeeApi;
