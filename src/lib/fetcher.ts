import { axiosInstance } from "@/services/instance";

export const Fetcher =  (url: string) => axiosInstance.get(url).then(({data}) => data);