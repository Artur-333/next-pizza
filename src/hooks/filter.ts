import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useSet } from "react-use";
import qs from "qs";

interface PriceProps {
    priceFrom?: number;
    priceTo?: number;
}

interface FilterProps {
    price: PriceProps;
    selectedSizes: Set<string>;
    selectedIngredients: Set<string>;
    selectedTypes: Set<string>;
}

interface returnProps extends FilterProps {
    setSelectedSizes: (value: string) => void;
    setSelectedTypes: (value: string) => void;
    setSelectedIngredients: (value: string) => void;
    updatePrice: (name: keyof PriceProps, value: number) => void;
    setPrice: ({ priceFrom, priceTo }: PriceProps) => void;
}

export const useFilter = (): returnProps => {

    const searchParams = useSearchParams()
    const router = useRouter()
    console.log(searchParams);


    const [price, setPrice] = React.useState<PriceProps>({
        priceFrom: Number(searchParams.get("priceFrom")) || undefined,
        priceTo: Number(searchParams.get("priceTo")) || undefined,
    });

    const [selectedIngredients, { toggle: setSelectedIngredients }] = useSet(
        new Set<string>(searchParams.get("ingredients")?.split(",") || [])
    );
    const [selectedSizes, { toggle: setSelectedSizes }] = useSet(
        new Set<string>(searchParams.get("sizes")?.split(",") || [])
    );
    const [selectedTypes, { toggle: setSelectedTypes }] = useSet(
        new Set<string>(searchParams.get("types")?.split(",") || [])
    );
    React.useEffect(() => {

        const query = qs.stringify({
            sizes: Array.from(selectedSizes),
            types: Array.from(selectedTypes),
            ingredients: Array.from(selectedIngredients),
            ...price
        }, {
            arrayFormat: "comma",
            encode: false
        })
        router.push(`?${query}`)


    }, [price, router, selectedIngredients, selectedSizes, selectedTypes]);

    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrice((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return {
        updatePrice,
        setSelectedIngredients,
        setPrice,
        price,
        selectedSizes,
        selectedIngredients,
        selectedTypes,
        setSelectedSizes,
        setSelectedTypes,
    }
}
