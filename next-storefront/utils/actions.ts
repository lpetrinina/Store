import prisma from "@/lib/prisma";

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