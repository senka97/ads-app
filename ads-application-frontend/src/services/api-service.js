import axios from "axios";
import { ROUTES } from "../constants";

export class ApiService {
  constructor(options = {}) {
    this.client = axios.create({
      baseURL: ROUTES.API_BASE_URL,
      ...options,
    });
    this.client.interceptors.response.use(
      this.handleSuccessResponse,
      this.handleErrorResponse
    );
    this.client.interceptors.request.use((config) => {
      const token = localStorage.getItem("token");
      config.headers.Authorization = token ? `Bearer ${token}` : "";
      return config;
    });
  }

  addHeader(headers) {
    this.client.defaults.headers = headers;
  }

  handleSuccessResponse(response) {
    return response;
  }

  handleErrorResponse = async (error) => {
    try {
      const { status } = error.response;
      switch (status) {
        case 401:
        case 403: {
          break;
        }
        default:
          break;
      }
      return Promise.reject(error);
    } catch (e) {
      return Promise.reject(error);
    }
  };
}

const apiService = new ApiService();

export default apiService;
