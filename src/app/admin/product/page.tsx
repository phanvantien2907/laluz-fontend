import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/site-header";
import { Product, columns } from "@/app/admin/product/colums";
import { DataTable } from "@/app/admin/product/data-table";
import AddNew from "@/app/admin/product/components/add-new";
import { product } from "@/lib/api";

async function getProducts(): Promise<Product[]> {
  const data = await product(true);
  return data || [];
}

export default async function ProductManagePage() {
  const data = await getProducts(); // ✅ Server-side await

  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <DataTable columns={columns} data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
