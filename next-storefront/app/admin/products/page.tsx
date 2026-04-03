import EmptyList from "@/components/global/EmptyList";
import { Table, TableCaption } from "@/components/ui/table";
import { fetchAdminProducts } from "@/utils/actions";

async function AdminProductsPage() {
  const products = await fetchAdminProducts();

  if (products.length === 0) {
    return <EmptyList />;
  }

  return (
    <section>
      <Table>
        <TableCaption className='capitalize'>
          total products: {products.length}
        </TableCaption>
      </Table>
    </section>
  );
}

export default AdminProductsPage;
