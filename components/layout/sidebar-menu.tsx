import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { useContext } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

import { Button } from "@/components/ui/button";

import { DashboardContext } from "@/hooks/dashboard-context";

import { MenuChild, menu } from "./data";
import { usePathname } from "next/navigation";
import { ArrowIcon } from "../icons/arrow";
import { disconnect } from "@/app/api/lib/action";

export const SidebarMenu = () => {
  const context = useContext(DashboardContext);

  const pathname = usePathname();
  const isMenuActive = (menu: MenuChild[]) => {
    const links = new Set(menu.map((item) => item.link));

    return links.has(pathname);
  };

  const logout = () => {
    localStorage.clear();
    disconnect();
  };

  return (
    <div className="flex h-full flex-col justify-between px-4">
      <div className="space-y-1">
        {menu.map(({ id, title, children, icon: Icon, link }) =>
          link ? (
            <Link
              href={link}
              key={id}
              className={twMerge(
                "mb-1 flex h-[34px] w-full items-center rounded-[5px] p-2 text-lg duration-200",
                pathname.includes(link)
                  ? "text-secondary-blue"
                  : "hover:text-secondary-blue",
                context?.showDesktopSidebar ? "" : ""
              )}
            >
              <Icon
                className={twMerge(
                  context?.showDesktopSidebar ? "mr-2" : "mx-auto"
                )}
              />

              {context?.showDesktopSidebar && (
                <div
                  className={twMerge(
                    "flex-1 text-left ",
                    pathname === link ? "font-bold" : "font-medium"
                  )}
                >
                  {title}
                </div>
              )}
            </Link>
          ) : (
            <Disclosure
              key={id}
              defaultOpen={children && isMenuActive(children)}
            >
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={twMerge(
                      "mb-1 flex h-[34px] w-full items-center rounded-[5px] p-2 text-lg",
                      children && isMenuActive(children)
                        ? "text-secondary-blue"
                        : "hover:text-secondary-blue"
                    )}
                    onClick={() => context?.setShowDesktopSidebar(true)}
                  >
                    <Icon
                      className={twMerge(
                        context?.showDesktopSidebar ? "mr-2" : "mx-auto"
                      )}
                    />

                    {context?.showDesktopSidebar && (
                      <>
                        <div className="flex-1 text-left  font-medium">
                          {title}
                        </div>

                        <ArrowIcon
                          className={twMerge(open ? "rotate-180" : "")}
                        />
                      </>
                    )}
                  </Disclosure.Button>
                  {context?.showDesktopSidebar && (
                    <Disclosure.Panel className="space-y-1">
                      {children?.map((childItem) => (
                        <Link
                          href={childItem.link}
                          key={childItem.title}
                          className={twMerge(
                            "h-[34px] rounded-[5px] pl-10 text-base font-medium flex items-center",
                            pathname === childItem.link
                              ? "text-secondary-blue"
                              : "hover:text-secondary-blue"
                          )}
                        >
                          {childItem.title}
                        </Link>
                      ))}
                    </Disclosure.Panel>
                  )}
                </>
              )}
            </Disclosure>
          )
        )}
      </div>
      <div className="flex h-[34px] items-center justify-center hover:cursor-pointer">
        {context?.showDesktopSidebar ? (
          <div className="w-full">
            <Button
              className="w-full bg-secondary-red"
              variant="default"
              onClick={() => logout()}
            >
              <AiOutlineLogout className="mr-2" /> Log out
            </Button>
          </div>
        ) : (
          <div className="rounded-full bg-secondary-red p-2">
            <AiOutlineLogout onClick={() => logout()} />
          </div>
        )}
      </div>
    </div>
  );
};
