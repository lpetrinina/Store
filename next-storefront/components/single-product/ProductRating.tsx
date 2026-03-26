import { FaStar } from "react-icons/fa";

function ProductRating({ productId }: { productId: string }) {
  //* Temp
  const rating = 4.2;
  const count = 43;

  const countValue = `(${count}) reviews`;

  return (
    <span className='flex gap-1 items-center text-sm sm:text-base mt-1 mb-4'>
      <FaStar className='h-3 w-3' />
      {rating} {countValue}
    </span>
  );
}

export default ProductRating;
