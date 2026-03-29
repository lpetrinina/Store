"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { adminLinks } from "@/utils/links";

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className='flex flex-col gap-1'>
      {adminLinks.map((link) => {
        const isActivePage = pathname === link.href;
        const variant = isActivePage ? "default" : "ghost";

        return (
          <Button
            asChild
            className='capitalize font-normal w-full justify-center sm:justify-start'
            variant={variant}
            key={link.label}
          >
            <Link href={link.href}>{link.label}</Link>
          </Button>
        );
      })}
    </aside>
  );
}

export default Sidebar;
