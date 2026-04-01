'use server';

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

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

export async function createProductAction(prevState: any, formData: FormData): Promise<{ error: null | string, success: boolean }> {

    const user = await getAuthUser();

    try {
        const name = formData.get('name') as string;
        const company = formData.get('company') as string;
        const price = Number(formData.get('price') as string);
        const image = formData.get('image') as File;
        const description = formData.get('description') as string;
        const featured = Boolean(formData.get('featured') as string);

        await prisma.product.create({
            data: {
                name,
                company,
                price,
                image: '/images/product-1.jpg',
                description,
                featured,
                clerkId: user.id
            }
        })

        return { error: null, success: true }
    } catch (err) {

        return { error: err instanceof Error ? err.message : 'An error occurred', success: false }
    }

}