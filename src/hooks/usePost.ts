import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios";
import toast from "react-hot-toast";

interface UsePostProps<TData, TVariables> {
  url: string;
  options?: Omit<UseMutationOptions<TData, unknown, TVariables>, "mutationFn">;
  successMessage?: string;
}

export function usePost<TData = unknown, TVariables = unknown>({
  url,
  options,
  successMessage = "عملیات با موفقیت انجام شد",
}: UsePostProps<TData, TVariables>) {
  return useMutation<TData, unknown, TVariables>({
    mutationFn: async (variables) => {
      const { data } = await axiosInstance.post<TData>(url, variables);
      return data;
    },
    onSuccess: (data, variables, context) => {
      toast.success(successMessage);
      options?.onSuccess?.(data, variables, context);
    },
    ...options,
  });
}
