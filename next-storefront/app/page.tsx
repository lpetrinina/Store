import { Suspense } from "react";

import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import LoadingContainer from "@/components/global/LoadingContainer";

function HomePage() {
  return (
    <>
      <Hero />

      <Suspense fallback={<LoadingContainer className='pt-[165px]' />}>
        <FeaturedProducts />
      </Suspense>
    </>
  );
}

export default HomePage;
