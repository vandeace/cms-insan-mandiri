import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Master Data",
      url: "#",
      items: [
        {
          title: "Employee",
          url: "/dashboard/employee",
        },
        {
          title: "Branch",
          url: "/dashboard/branch",
        },
      ],
    },
    {
      title: "Approval",
      url: "#",
      items: [
        {
          title: "Permission",
          url: "/dashboard/permission",
        },
        {
          title: "Overtime",
          url: "/dashboard/overtime",
        },
      ],
    },
    {
      title: "Attendance",
      url: "#",
      items: [
        {
          title: "Daily Report",
          url: "/dashboard/daily-report",
        },
        {
          title: "Monthly Report",
          url: "/dashboard/monthly-report",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  console.log("pathname :", pathname);
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link href={"/dashboard"}>
          <Image src={"/images/logo.png"} alt="logo-insan-mandiri" width={180} height={100} />
        </Link>
      </SidebarHeader>
      <SidebarContent className="gap-0 ">
        {/* We create a collapsible SidebarGroup for each parent. */}
        {data.navMain.map(item => (
          <Collapsible
            key={item.title}
            title={item.title}
            className="group/collapsible"
            defaultOpen
          >
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <CollapsibleTrigger>
                  {item.title}{" "}
                  <ChevronRightIcon className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.items.map(item => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild isActive={pathname === item.url}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
