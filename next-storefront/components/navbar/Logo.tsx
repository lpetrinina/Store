import Link from "next/link";
import { Button } from "../ui/button";
import { BiHomeHeart } from "react-icons/bi";
import { HiHome } from "react-icons/hi2";
import { TbHeartCode } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";

function Logo() {
  return (
    <Button asChild size='icon-lg'>
      <Link href='/'>
        <BiHomeHeart />
        {/* <HiHome /> */}
        {/* <TbHeartCode /> */}
        {/* <VscCode /> */}
      </Link>
    </Button>
  );
}

export default Logo;
