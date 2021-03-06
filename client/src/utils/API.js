import axios from "axios";

function loginUser(loginData){  
  return axios.post("/api/users/login",loginData);
}

function createUser(userData){  
    return axios.post("/api/users/",userData);
}

function updateUser(id, userData){
    return axios.put(`/api/users/${id}`,userData);
}
export default {
  loginUser,
  createUser,
  updateUser
};