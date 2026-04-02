"use client";

import Form from "next/form";
import { useActionState, useEffect } from "react";

import { toast } from "sonner";
import { actionFunction } from "@/utils/types";

const initialState = { error: null };

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
  }, [state]);

  return <Form action={formAction}>{children}</Form>;
}

export default FormContainer;
