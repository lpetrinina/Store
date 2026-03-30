import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

type TextareaInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
};

function TextareaInput({ name, labelText, defaultValue }: TextareaInputProps) {
  return (
    <div className='mb-3'>
      <Label htmlFor={name} className='capitalize mb-2 ml-1'>
        {labelText || name}
      </Label>

      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        rows={5}
        required
        className='leading-loose'
      />
    </div>
  );
}

export default TextareaInput;
