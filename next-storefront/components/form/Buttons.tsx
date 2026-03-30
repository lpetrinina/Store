"use client";

import { useFormStatus } from "react-dom";
import { RxReload } from "react-icons/rx";

import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type btnSize = "default" | "lg" | "sm";

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};

export function SubmitButton({
  className = "",
  text = "submit",
  size = "lg",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type='submit'
      disabled={pending}
      size={size}
      className={cn("capitalize", className)}
    >
      {pending ? (
        <>
          <RxReload className='mr-2 h-4 w-4 animate-spin' />
          Pleace wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
}
