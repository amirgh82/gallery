import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios";
import toast from "react-hot-toast";

interface UsePutProps<TData, TVariables> {
  url: string;
  options?: Omit<UseMutationOptions<TData, unknown, TVariables>, "mutationFn">;
  successMessage?: string;
}

export function usePut<TData = unknown, TVariables = unknown>({
  url,
  options,
  successMessage = "ویرایش با موفقیت انجام شد",
}: UsePutProps<TData, TVariables>) {
  return useMutation<TData, unknown, TVariables>({
    mutationFn: async (variables) => {
      const { data } = await axiosInstance.put<TData>(url, variables);
      return data;
    },
    onSuccess: (data, variables, context) => {
      toast.success(successMessage);
      options?.onSuccess?.(data, variables, context);
    },
    ...options,
  });
}
