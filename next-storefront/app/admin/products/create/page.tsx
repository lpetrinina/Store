import { createProductAction } from "@/utils/actions";

import FormInput from "@/components/form/FormInput";
import FormContainer from "@/components/form/FormContainer";
import PriceInput from "@/components/form/PriceInput";
import ImageInput from "@/components/form/ImageInput";
import TextareaInput from "@/components/form/TextareaInput";
import CheckboxInput from "@/components/form/CheckboxInput";
import { SubmitButton } from "@/components/form/Buttons";

function CreateProductPage() {
  return (
    <section>
      <h1 className='text-xl sm:text-2xl font-semibold mb-4 capitalize'>
        create product
      </h1>

      <div className='border p-8 rounded-md'>
        <FormContainer action={createProductAction}>
          <div className='grid md:grid-cols-2 gap-4 mb-4'>
            <FormInput
              type='text'
              name='name'
              label='product name'
              defaultValue='vase'
            />

            <FormInput
              type='text'
              name='company'
              label='company'
              defaultValue='modern world'
            />

            <PriceInput defaultValue={129} />
            <ImageInput />
          </div>

          <TextareaInput
            name='description'
            labelText='product description'
            defaultValue='Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone'
          />

          <div className='mt-6'>
            <CheckboxInput name='featured' label='featured' />
          </div>

          <SubmitButton text='create product' className='mt-8' />
        </FormContainer>
      </div>
    </section>
  );
}

export default CreateProductPage;
