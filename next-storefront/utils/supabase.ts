import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env
    .NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseKey);

const bucket = "furniture-images";

export async function uploadImage(image: File) {
    const timestamp = Date.now();
    const imageNewName = `${timestamp}-${image.name}`;

    const { data } = await supabase.storage
        .from(bucket)
        .upload(imageNewName, image);

    if (!data) {
        throw new Error('Image upload failed!')
    }

    return supabase.storage.from(bucket).getPublicUrl(imageNewName).data.publicUrl; // return uploaded image public URL
}
