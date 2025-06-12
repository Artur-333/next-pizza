import useSWR from "swr";
import {Fetcher} from "@/lib/fetcher";
import { ApiRoutes } from "@/services/constants";
import { getBasketDetails } from "@/lib/get-basket-details";

export const useBasket = ()=>{
    const {data: basket, isLoading, error} = useSWR(ApiRoutes.BASKET, Fetcher);
    const data = isLoading || error? {
        items:[],totalAmount:0
    }:getBasketDetails(basket);
    return {
        items: data.items || [],
        totalAmount: data.totalAmount || 0,
        isLoading,
        error
    }


}