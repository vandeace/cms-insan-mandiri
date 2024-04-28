import axiosInstance from "@/config/api";
import { TBranch, TBranchFilter } from "@/types/branches";
import { TPaginatedRequest } from "@/types/request";

export const createBranch = async (formData: TBranch) => {
  try {
    const requestData = {
      name: formData.name,
      address: formData.address,
      lat: Number(formData.lat),
      long: Number(formData.long),
      radius: formData.radius,
    };
    const { data, status } = await axiosInstance.post("/branches", requestData);
    return data;
  } catch {
    throw new Error("Unexpected Error");
  }
};

export const editBranch = async (formData: TBranch) => {
  try {
    const requestData = {
      name: formData.name,
      address: formData.address,
      lat: Number(formData.lat),
      long: Number(formData.long),
      radius: formData.radius,
    };
    const { data, status } = await axiosInstance.patch(
      `/branches/${formData.id}`,
      requestData
    );
    return data;
  } catch {
    throw new Error("Unexpected Error");
  }
};

export const branchesRequest = async (
  params: TPaginatedRequest<TBranchFilter>
) => {
  const { page = 1, limit = 10, filter } = params;
  const filterParams = filter ? (filter as TBranchFilter) : undefined;

  try {
    const { data } = await axiosInstance.get(`/branches`, {
      params: {
        page: page,
        limit: limit,
        search: filterParams?.search,
      },
    });

    return data;
  } catch {
    throw new Error("Unexpected Error");
  }
};

export const branchesDetailRequest = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/branches/${id}`);

    return data;
  } catch {
    throw new Error("Unexpected Error");
  }
};
