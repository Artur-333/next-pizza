"use client";
import React from "react";
import { Search } from "./search";
import { cn } from "@/lib/utils";
import { search } from "@/services/search";
import { Product } from "@prisma/client";
import { useClickAway } from "react-use";
import Link from "next/link";

interface Props {
  className?: string;
}

export const SearchHeader: React.FC<Props> = (props) => {
  const { className } = props;
  const [searchValue, setSearchValue] = React.useState("");
  const [products, setProducts] = React.useState<Product[]>([]);
  const [focus, setFocus] = React.useState(false);
  const ref = React.useRef(null);
  useClickAway(ref, () => {
    setFocus(false);
  });
  React.useEffect(() => {
    search(searchValue).then((data) => setProducts(data));
  }, [searchValue]);

  return (
    <>
      {focus && <div className="fixed inset-0 z-100 bg-black/50"></div>}
      <div ref={ref} className={cn("flex-1 relative z-100", className)}>
        <Search
          onChange={setSearchValue}
          value={searchValue}
          onFocus={() => setFocus(true)}
        />
        {focus && (
          <ul className="absolute top-[100%] bg-white left-0 right-0">
            {products.map((el) => (
              <li className="flex items-center gap-5" key={el.id}>
                <Link href={`/product/${el.id}`}>
                  <img width={20} height={20} src={el.imgUrl} alt={el.name} />
                  {el.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
