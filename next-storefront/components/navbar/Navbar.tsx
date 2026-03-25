import { Suspense } from "react";
import Container from "../global/Container";
import CartButton from "./CartButton";
import DarkMode from "./DarkMode";
import LinksDropdown from "./LinksDropdown";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import { Input } from "../ui/input";

function Navbar() {
  return (
    <nav className='border-b'>
      <Container className='flex flex-wrap flex-col  sm:flex-row sm:justify-between items-center gap-4 py-8'>
        <Logo />

        <Suspense
          fallback={
            <Input
              type='search'
              placeholder='search product...'
              className='max-w-xs dark:bg-muted'
              disabled
            />
          }
        >
          <NavSearch />
        </Suspense>

        <div className='flex items-center gap-4'>
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
