import axios from 'axios';



const Api = axios.create({ baseURL: import.meta.env.VITE_APP_BASE_URL });

const SECURE_API = axios.create({ baseURL: import.meta.env.VITE_APP_BASE_URL });

SECURE_API.interceptors.request.use(
  (config) => {
    const unParesdToken = localStorage.getItem("userData");
    console.log("🚀 ~ file: Api.js:28 ~ unParesdToken:", unParesdToken)
    if (unParesdToken) {
      const tokenData = JSON.parse(atob(unParesdToken.split(".")[1]));
      const currentTime = Math.floor(Date.now() / 1000);
      if (tokenData.exp && tokenData.exp < currentTime) {
        localStorage.removeItem("userData");
        localStorage.removeItem("role");
        localStorage.clear();
        console.log("token has been expired");
        window.location.href = "/auth/Login";
      } else {
        config.headers.Authorization = `Bearer ${unParesdToken}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const ApiCall={
  SECURE_API,
  Api
}
export default ApiCall
