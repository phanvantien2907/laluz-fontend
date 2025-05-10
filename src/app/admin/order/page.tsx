import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/site-header";
import { Order, columns } from "@/app/admin/order/colums";
import { order } from "@/lib/api";
import { DataTable } from "@/app/admin/order/data-table";
import { AuthorizedWrapper } from "@/app/admin/components/AuthorizedWrapper";


async function getOrder(): Promise<Order[]> {
  const data = await order();
  return data || [];
}

export default async function OrderManagePage() {
  const data = await getOrder(); // ✅ Server-side await

  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <AuthorizedWrapper>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <DataTable columns={columns} data={data} />
            </div>
          </div>
        </div>
        </AuthorizedWrapper>
      </SidebarInset>
    </SidebarProvider>
  );
}
