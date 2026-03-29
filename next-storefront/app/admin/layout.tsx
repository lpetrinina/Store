import { Separator } from "@/components/ui/separator";
import Sidebar from "./Sidebar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2 className='pl-4 text-xl sm:text-2xl'>Dashboard</h2>
      <Separator className='mt-2' />

      <section className='flex flex-col sm:flex-row gap-4 mt-12'>
        <Sidebar />

        <div className='flex-1 px-4'>{children}</div>
      </section>
    </>
  );
}

export default DashboardLayout;
