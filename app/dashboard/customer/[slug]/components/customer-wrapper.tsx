"use client";

import CustomerForm from "./customer-form";
import { useGetDetailCustomer } from "@/hooks/api/use-get-detail-customer";
import SkeletonForm from "@/components/skeleton-state/skeleton-form";
import { useParams } from "next/navigation";

const CustomerWrapper = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: dataCustomer, isFetching } = useGetDetailCustomer(
    slug === "add" ? undefined : slug,
  );

  if (isFetching) {
    return <SkeletonForm />;
  }

  return <CustomerForm dataCustomer={dataCustomer?.data} />;
};

export default CustomerWrapper;
