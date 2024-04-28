import { useQuery } from "@tanstack/react-query";
import { TBranch } from "@/types/branches";
import { TPaginatedRequest } from "@/types/request";
import { TResponse } from "@/types/response";

export const UseGetAllBranch = (params: TPaginatedRequest) => {
  return useQuery<TResponse<TBranch>>({
    queryKey: ["branch", params],
    queryFn: () => branchesRequest(params),
  });
};

export const getFormattedBranch = () => {
  const { data } = UseGetAllBranch({});

  return data?.data.length
    ? data.data.map((item) => ({
        value: item.id,
        label: item.name,
      }))
    : [];
};

// export const useGetBranchDetail = (id: string | undefined) => {
//   return useQuery<TSingleResponse<TBranch>>(
//     ["branch-detail", id],
//     () => branchesDetailRequest(id ?? ""),
//     {
//       enabled: id ? true : false,
//       keepPreviousData: false,
//     }
//   );
// };
