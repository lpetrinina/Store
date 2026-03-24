import Link from "next/link";
import Image from "next/image";

import icon from "@/app/icon.png";

function Logo() {
  return (
    <Link href='/' className='flex flex-col items-center gap-1'>
      <div className='w-8 sm:w-10 aspect-square'>
        <Image src={icon} alt='logo' className='object-cover' />
      </div>
      <span className='text-[8px] sm:text-[9px] uppercase font-bold text-secondary-foreground/70 tracking-widest'>
        Nordik home
      </span>
    </Link>
  );
}

export default Logo;
