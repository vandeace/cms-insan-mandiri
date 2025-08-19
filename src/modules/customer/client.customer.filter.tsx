"use client";
import CustomerSearch from "@/components/filter/search";

export default function ClientCustomerFilter() {
  return (
    <div className="grid grid-cols-1 gap-x-4">
      <div className="grid w-full max-w-sm items-center gap-2">
        <CustomerSearch name="search" label="Pelanggan" placeholder="Cari Pelanggan" />
      </div>
    </div>
  );
}