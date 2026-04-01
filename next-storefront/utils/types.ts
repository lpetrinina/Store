export type actionFunction = (
    prevState: any,
    formData: FormData,
) => Promise<{ error: null | string, success: null | string }>;

