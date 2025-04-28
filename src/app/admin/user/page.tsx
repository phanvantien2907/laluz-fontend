import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DataTable } from "@/app/admin/user/data-table";
import { SiteHeader } from "@/components/site-header";
import { User, columns } from "@/app/admin/user/colums";

async function getUsers(): Promise<User[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/api/user`, {
      cache: "no-store",});

    if (!res.ok) {
      throw new Error(`Failed to fetch users: ${res.status}`);
    }

    const responseData = await res.json();
    return responseData.data.data || [];
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

export default async function UserManagerPage() {
  const data = await getUsers(); // ✅ Server-side await

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
