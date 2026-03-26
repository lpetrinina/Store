import Image from "next/image";

import { fetchSingleProduct } from "@/utils/actions";
import { formatCurrency } from "@/utils/format";

import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import AddToCart from "@/components/single-product/AddToCart";
import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import ProductRating from "@/components/single-product/ProductRating";

async function SingleProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await fetchSingleProduct(id);

  const { name, image, company, description, price } = product;
  const formattedPrice = formatCurrency(price);

  console.log(id);

  return (
    <section>
      <BreadCrumbs name={name} />

      <div className='mt-6 grid grid-rows-[1fr_2fr] gap-6 md:grid-rows-none  md:grid-cols-2 md:gap-12'>
        {/* Image */}
        <div className='relative h-full aspect-auto'>
          <Image
            src={image}
            alt={name}
            fill
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='w-full rounded object-cover'
          />
        </div>

        {/* Product Info */}
        <div>
          <div className='flex gap-x-8 items-center'>
            <h1 className='capitalize text-2xl sm:text-3xl font-bold'>
              {name}
            </h1>
            <FavoriteToggleButton productId={id} />
          </div>
          <ProductRating productId={id} />

          <h4 className='text-base sm:text-xl mt-2 text-muted-foreground'>
            {company}
          </h4>
          <p className='mt-3 text-sm sm:text-base bg-muted inline-block p-2 rounded'>
            {formattedPrice}
          </p>
          <p className='mt-4 sm:mt-6 leading-6 text-sm sm:text-base text-muted-foreground'>
            {description}
          </p>

          <AddToCart productId={id} />
        </div>
      </div>
    </section>
  );
}

export default SingleProductPage;
