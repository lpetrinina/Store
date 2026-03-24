import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/generated/prisma/client";

import { formatCurrency } from "@/utils/format";
import { Card, CardContent } from "../ui/card";
import FavoriteToggleButton from "./FavoriteToggleButton";

function ProductsList({ products }: { products: Product[] }) {
  return (
    <div className='mt-12 grid gap-4'>
      {products.map((product) => {
        const {
          id: productId,
          name,
          image,
          price,
          company,
          description,
        } = product;
        const formattedPrice = formatCurrency(price);

        return (
          <article key={productId} className='group relative'>
            <Link href={`/product/${productId}`}>
              <Card className='group-hover:shadow-xl transition-shadow duration-500'>
                <CardContent className='px-4 flex ite gap-6'>
                  <div className='relative h-30 sm:h-44 aspect-square sm:aspect-video overflow-hidden rounded'>
                    <Image
                      src={image}
                      alt={name}
                      fill
                      priority
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      className='object-cover w-full  transform group-hover:scale-110 transition-transform duration-500'
                    />
                  </div>

                  <div className='mt-1 flex flex-col flex-1'>
                    <h2 className='text-base sm:text-lg font-semibold capitalize '>
                      {name}
                    </h2>
                    <h4 className='text-muted-foreground text-sm'>{company}</h4>
                    <p className='mt-4 hidden sm:block text-muted-foreground text-base'>
                      {description.split(" ").slice(0, 20).join(" ") + "..."}
                    </p>
                    <p className='text-muted-foreground ml-auto mt-auto'>
                      {formattedPrice}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <div className='absolute top-4 right-4 z-5'>
              <FavoriteToggleButton productId={productId} />
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default ProductsList;
