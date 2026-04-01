'use server';

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { productSchema } from "./schemas";

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

export async function createProductAction(prevState: any, formData: FormData): Promise<{ error: null | string, success: null | string }> {

    const user = await getAuthUser();

    try {
        const rawData = Object.fromEntries(formData);
        const validatedFields = productSchema.safeParse(rawData);

        if (!validatedFields.success) {
            const errors = validatedFields.error.issues.map((err) => err.message);
            throw new Error(errors.join(', '))
        }


        await prisma.product.create({
            data: {
                ...validatedFields.data,
                image: '/images/product-1.jpg',
                clerkId: user.id
            }
        })

        return { error: null, success: 'The product is successfully created!' }
    } catch (err) {

        return { error: err instanceof Error ? err.message : 'An error occurred', success: null }
    }

}