import prisma from "@/lib/prisma";

export async function fetchFeaturedProducts() {
    const products = await prisma.product.findMany({
        where: {
            featured: true
        },
    })

    return products;
}

export async function fetchAllProducts() {
    const orderedProducts = await prisma.product.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });

    return orderedProducts;
}