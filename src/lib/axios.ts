import axios from "axios";
import toast from "react-hot-toast";

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.example.com",
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        const message =
            error?.response?.data?.message || "مشکلی پیش آمد. دوباره تلاش کنید.";
        toast.error(message);
        return Promise.reject(error);
    }
);
