"use client";
import React from "react";
import { Search } from "./search";
import { cn } from "@/lib/utils";
import { search } from "@/services/search";
import { Product } from "@prisma/client";

interface Props {
  className?: string;
}

export const SearchHeader: React.FC<Props> = (props) => {
  const { className } = props;
  const [searchValue, setSearchValue] = React.useState("");

  const [products, setProducts] = React.useState<Product[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);    

  React.useEffect(() => {
    search(searchValue).then((data) => setProducts(data));
  }, [searchValue]);

  return (
   <>
     
    <div className= {cn("flex-1 relative z-100 w-full", className)}>

<Search

    onFocus={() => setIsOpen(true)}
  onChange={setSearchValue}
  value={searchValue}

  />
  {
    isOpen &&
    <ul  className="absolute  w-full bg-white  top-[100%]" >
    {products.map((item) => (
      <li className="flex items-center gap-5 " key={item.id}>
            <img className="w-10" src={item.imgUrl} alt="" />
        {item.name}</li>

    ))}
  </ul>
  }
  </div>
   </>

  );
};
