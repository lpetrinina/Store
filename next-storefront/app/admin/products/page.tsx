import Link from "next/link";

import { fetchAdminProducts } from "@/utils/actions";
import { formatCurrency } from "@/utils/format";
import EmptyList from "@/components/global/EmptyList";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

        <TableHeader>
          <TableRow>
            <TableHead className='capitalize'>product name</TableHead>
            <TableHead className='capitalize'>company</TableHead>
            <TableHead className='capitalize'>price</TableHead>
            <TableHead className='capitalize'>actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.map((product) => {
            const { id: productId, name, company, price } = product;

            return (
              <TableRow key={productId}>
                <TableCell>
                  <Link
                    href={`/products/${productId}`}
                    className='text-muted-foreground tracking-wide capitalize'
                  >
                    {name}
                  </Link>
                </TableCell>

                <TableCell>{company}</TableCell>
                <TableCell>{formatCurrency(price)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
}

export default AdminProductsPage;
