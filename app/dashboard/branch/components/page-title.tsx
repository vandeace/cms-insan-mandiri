"use client";
import { PageTitle } from "@/components/page-title";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { CreateIcon } from "@/components/icons/create";
import { useSession } from "next-auth/react";
import { TTokenData } from "@/types/auth";

export default function Title() {
  const session = useSession();
  const user = session?.data?.user as unknown as TTokenData;

  const router = useRouter();
  return (
    <div className="mb-3 flex items-center justify-between rounded-md bg-[#fff] p-4 drop-shadow-2xl">
      <PageTitle>Data Kantor</PageTitle>
      {user?.role === "SUPER_ADMIN" && (
        <Button
          onClick={() => router.push("/dashboard/branch/add")}
          className="w-[200px] text-[#fff] "
        >
          <CreateIcon className="mr-2" />
          Tambah Data
        </Button>
      )}
    </div>
  );
}
