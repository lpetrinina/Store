import { GoHeartFill } from "react-icons/go";
import { Button } from "../ui/button";

function FavoriteToggleButton({ productId }: { productId: string }) {
  return (
    <Button size='icon' variant='outline' className='cursor-pointer'>
      <GoHeartFill />
    </Button>
  );
}

export default FavoriteToggleButton;
