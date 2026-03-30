import Form from "next/form";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/form/FormInput";

async function createProductAction(formData: FormData) {
  "use server";
  const name = formData.get("name") as string;
  console.log(name);
}

function CreateProductPage() {
  return (
    <section>
      <h1 className='text-xl sm:text-2xl font-semibold mb-4 capitalize'>
        create product
      </h1>

      <div className='border p-8 rounded-md'>
        <Form action={createProductAction}>
          <FormInput
            type='text'
            name='name'
            label='product name'
            defaultValue='Vase'
          />

          <Button type='submit' size='lg'>
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
}

export default CreateProductPage;
