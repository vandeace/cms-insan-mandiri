import React from "react";
import CustomerWrapper from "./components/customer-wrapper";
import Title from "@/components/Title/page-title";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

async function Page({ params }: PageProps) {
  const { slug } = await params;
  return (
    <div className="flex w-full flex-col">
      <Title
        title={slug === "add" ? "Tambah Pelanggan" : "Edit Pelanggan"}
        urlBtn="/dashboard/customer"
      />
      <section className="flex w-full flex-col gap-y-3 rounded-md border border-alice-blue p-4 drop-shadow-2xl">
        <CustomerWrapper />
      </section>
    </div>
  );
}

export default Page;
