import Link from "next/link";

import { Button } from "../ui/button";
import HeroCarousel from "./HeroCarousel";

function Hero() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-3xl font-bold text-4xl sm:text-6xl tracking-tight'>
          We are changing the way people shop
        </h1>
        <p className='mt-4 sm:mt-8 max-w-xl text-base sm:text-lg leading-8 text-muted-foreground'>
          Discover modern Scandinavian furniture designed for simplicity,
          comfort, and timeless elegance. Clean lines, natural materials, and
          thoughtful craftsmanship to create a calm and functional living space.
        </p>

        <Button asChild size='lg' className='mt-6 sm:mt-10 px-4'>
          <Link href='/products'>Our product</Link>
        </Button>
      </div>

      <HeroCarousel />
    </section>
  );
}

export default Hero;
