import { SignIn } from "@clerk/nextjs";

export const metadata = {
  title: "Login",
};

function LoginPage() {
  return (
    <div className='flex items-center justify-center'>
      <SignIn />
    </div>
  );
}

export default LoginPage;
