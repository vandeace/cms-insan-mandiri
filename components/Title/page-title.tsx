"use client";
import { PageTitle } from "@/components/page-title";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { CreateIcon } from "@/components/icons/create";
import { useSession } from "next-auth/react";
import { TUserData } from "@/types/auth";
interface TTitle {
  title: string;
  urlBtn?: string;
}
export default function Title({ title, urlBtn }: TTitle) {
  const session = useSession();
  const user = session.data?.user as unknown as TUserData;
  const router = useRouter();
  return (
    <div className="flex items-center justify-between rounded-md px-4 h-16">
      <PageTitle>{title}</PageTitle>
      {user?.role === "SUPER_ADMIN" && urlBtn && (
        <Button onClick={() => router.push(urlBtn)} className="w-[200px] text-[#fff] ">
          <CreateIcon className="mr-2" />
          Tambah Data
        </Button>
      )}
    </div>
  );
}
