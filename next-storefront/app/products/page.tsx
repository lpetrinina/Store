import ProductContainer from "@/components/products/ProductContainer";

async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ layout?: string; search?: string }>;
}) {
  const searchParamsData = await searchParams;

  const layout = searchParamsData.layout || "grid";
  const search = searchParamsData.search || "";

  return <ProductContainer layout={layout} search={search} />;
}

export default ProductsPage;
