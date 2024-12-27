"use client";

import SkeletonForm from "@/components/skeleton-state/skeleton-form";
import { useGetBranchDetail } from "@/hooks/api/use-get-branch";
import BranchForm from "./branch-form";

interface TBranchWrapper {
  slug: string | undefined;
}

const BranchWrapper: React.FC<TBranchWrapper> = ({ slug }) => {
  const branchId = slug !== "add" ? (slug as string) : undefined;
  const { data, isFetching } = useGetBranchDetail(branchId);

  if (isFetching) {
    return <SkeletonForm />;
  }

  return <BranchForm dataBranch={data?.data} />;
};

export default BranchWrapper;
