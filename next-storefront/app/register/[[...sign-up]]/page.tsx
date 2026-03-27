import { SignUp } from "@clerk/nextjs";

function RegisterPage() {
  return (
    <div className='flex items-center justify-center'>
      <SignUp />
    </div>
  );
}

export default RegisterPage;
