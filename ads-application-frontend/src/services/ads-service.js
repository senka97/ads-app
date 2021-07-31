import { HttpService } from "./http-service";
import { ROUTES } from "../constants";

class AdsService extends HttpService {
  getAll = async (pageNumber) => {
    const response = await this.client.get(
      ROUTES.ADS + "?pageNumber=" + pageNumber
    );
    return response.data;
  };

  get = async (id) => {
    const response = await this.client.get(ROUTES.ADS + "/" + id);
    return response.data;
  };

  search = async (pageNumber, searchObj) => {
    const response = await this.client.get(
      ROUTES.ADS +
        ROUTES.SEARCH +
        "?pageNumber=" +
        pageNumber +
        "&category=" +
        searchObj.category +
        "&name=" +
        searchObj.name +
        "&priceSort=" +
        searchObj.priceSort +
        "&showMineOnly=" +
        searchObj.showMineOnly
    );
    return response.data;
  };

  create = async (payload) => {
    const response = await this.client.post(ROUTES.ADS, payload);
    return response.data;
  };

  edit = async (payload, id) => {
    const response = await this.client.put(ROUTES.ADS + "/" + id, payload);
    return response.data;
  };

  delete = async (id) => {
    const response = await this.client.delete(ROUTES.ADS + "/" + id);
    return response.data;
  };

  uploadImage = async (payload) => {
    const response = await this.client.post(
      ROUTES.ADS + ROUTES.UPLOAD_IMAGE,
      payload
    );
    return response.data;
  };
}

export const adsService = new AdsService();
