import axios from "axios";
const API_URL = '/api/user/'

const register = async(formData) => {
    console.log(formData)
    const response = await axios.post("https://authentication-2-qgze.onrender.com/api/user/register" , formData)
    console.log(response)
    localStorage.setItem('user',JSON.stringify(response.data))
    return response.data
}


const login = async(loginFormData) => {
    const response = await axios.post("https://authentication-2-qgze.onrender.com/api/user/login" , loginFormData)
    console.log(response.data)
    return response.data;
}

const authServices = {
    register ,
    login ,
}

export default authServices;