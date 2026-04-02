'use server';

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { imageSchema, productSchema, validateWithZodSchema } from "./schemas";
import { uploadImage } from "./supabase";

async function getAuthUser() {
    const user = await currentUser();

    if (!user) {
        throw new Error('You must be logged in to access this route');
    }

    return user;
}


//  GET product/s

export async function fetchFeaturedProducts() {
    const products = await prisma.product.findMany({
        where: {
            featured: true
        },
    })

    return products;
}

export async function fetchAllProducts({ search = '' }: { search: string }) {
    const orderedProducts = await prisma.product.findMany({
        where: {
            OR: [
                { name: { contains: search, mode: 'insensitive' } },
                { company: { contains: search, mode: 'insensitive' } }
            ]
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    return orderedProducts;
}

export async function fetchSingleProduct(productId: string) {

    const product = await prisma.product.findUnique({
        where: {
            id: productId
        }
    });

    if (!product) {
        redirect('/products')
    }

    return product;

}

// CREATE product

export async function createProductAction(prevState: any, formData: FormData): Promise<{ error: null | string }> {

    const user = await getAuthUser();
    let redirectPath: string | null = null

    try {
        const rawData = Object.fromEntries(formData);
        const file = formData.get('image') as File;
        const validatedFields = validateWithZodSchema(productSchema, rawData);
        const validatedFile = validateWithZodSchema(imageSchema, { image: file })

        // Upload image to Supabase bucket
        const fullPath = await uploadImage(validatedFile.image);

        await prisma.product.create({
            data: {
                ...validatedFields,
                image: fullPath,
                clerkId: user.id
            }
        })

    } catch (err) {
        return { error: err instanceof Error ? err.message : 'An error occurred' }
    }

    redirect('/admin/products')

}