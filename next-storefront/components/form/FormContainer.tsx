"use client";

import Form from "next/form";
import { useActionState, useEffect } from "react";

import { toast } from "sonner";
import { actionFunction } from "@/utils/types";

const initialState = { error: null, success: null };

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useActionState(action, initialState);

  useEffect(() => {
    if (state.error) {
      toast.error(state.error);
    }

    if (state.success) {
      toast.success(state.success);
    }
  }, [state]);

  return <Form action={formAction}>{children}</Form>;
}

export default FormContainer;
