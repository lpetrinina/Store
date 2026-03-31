"use client";

import Form from "next/form";
import { useActionState, useEffect } from "react";

import { toast } from "sonner";
import { actionFunction } from "@/utils/types";

const initialState = { error: null, success: false };

function FormContainer({
  successMessage,
  action,
  children,
}: {
  successMessage: string;
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useActionState(action, initialState);

  useEffect(() => {
    if (state.error) {
      toast.error(state.error);
    }

    if (state.success) {
      toast.success(successMessage);
    }
  }, [state]);

  return <Form action={formAction}>{children}</Form>;
}

export default FormContainer;
