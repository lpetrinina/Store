import { Input } from "../ui/input";
import { Label } from "../ui/label";

type FormInputNumberProps = {
  defaultValue?: number;
};
const name = "price";

function PriceInput({ defaultValue }: FormInputNumberProps) {
  return (
    <div className='mb-3'>
      <Label htmlFor={name} className='capitalize mb-2 ml-1'>
        Price ($)
      </Label>
      <Input
        id={name}
        type='number'
        name={name}
        min={0}
        defaultValue={defaultValue || 100}
        required
      />
    </div>
  );
}

export default PriceInput;
