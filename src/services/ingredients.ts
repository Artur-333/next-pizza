import { ApiRoutes } from "./constants";
import { axiosInstance } from "./instance";

export const ingredients = async () =>
  await (
    await axiosInstance.get(ApiRoutes.INGREDIENTS)
  ).data;
