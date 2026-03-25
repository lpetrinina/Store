import Link from "next/link";
import { LuLayoutGrid, LuList } from "react-icons/lu";

import { fetchAllProducts } from "@/utils/actions";
import EmptyList from "../global/EmptyList";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

async function ProductContainer({
  layout,
  search,
}: {
  layout: string;
  search: string;
}) {
  const products = await fetchAllProducts({ search });
  const totalProducts = products.length;

  const searchTerm = search ? `&search=${search}` : "";

  return (
    <>
      {/* Header */}
      <section>
        <div className='flex justify-between items-center'>
          <h4 className='font-semibold ml-2'>
            {totalProducts} product{totalProducts > 1 && "s"}
          </h4>

          <div className='flex gap-x-4'>
            <Button
              asChild
              size='icon'
              variant={layout === "grid" ? "default" : "ghost"}
            >
              <Link href={`/products?layout=grid${searchTerm}`}>
                <LuLayoutGrid />
              </Link>
            </Button>

            <Button
              asChild
              size='icon'
              variant={layout === "list" ? "default" : "ghost"}
            >
              <Link href={`/products?layout=list${searchTerm}`}>
                <LuList />
              </Link>
            </Button>
          </div>
        </div>
        <Separator className='mt-2' />
      </section>

      {/* Products grid/list */}
      <div>
        {totalProducts === 0 ? (
          <EmptyList
            heading='Sorry, no products matched your search...'
            className='mt-12'
          />
        ) : layout === "grid" ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </>
  );
}

export default ProductContainer;
