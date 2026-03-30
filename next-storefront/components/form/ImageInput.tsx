import { Input } from "../ui/input";
import { Label } from "../ui/label";

const name = "image";

function ImageInput() {
  return (
    <div className='mb-3'>
      <Label htmlFor={name} className='capitalize mb-2 ml-1'>
        image
      </Label>
      <Input id={name} name={name} type='file' accept='image/*' required />
    </div>
  );
}

export default ImageInput;
