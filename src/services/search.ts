import { ApiRoutes } from "./constants";
import { axiosInstance } from "./instance";

export const search = async (q: string) =>
  await (
    await axiosInstance.get(ApiRoutes.PRODUCTSEARCH, {
      params: { q },
    })
  ).data;
