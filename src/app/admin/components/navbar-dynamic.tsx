import Link from "next/link";
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarGroup, SidebarGroupContent, SidebarGroupLabel } from "@/components/ui/sidebar";
import { getLucideIcon } from "@/lib/dynamic-icon";
import { PlusCircleIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NavMainDynamic({ items }: { items: any[] }) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="Quick Create"
              className="min-w-8 bg-primary text-primary-foreground duration-200 ease-linear hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground" >
              <PlusCircleIcon />
              <span>Quick Create</span>
            </SidebarMenuButton>
            <Button
              size="icon"
              className="h-9 w-9 shrink-0 group-data-[collapsible=icon]:opacity-0"
              variant="outline" >
              <MailIcon />
              <span className="sr-only">Inbox</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
        <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          {items.map((item) => {
            const IconComponent = getLucideIcon(item.icon);
            return (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton asChild tooltip={item.title}>
                  <Link href={item.alias}>
                    {IconComponent && <IconComponent />}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}