import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios";
import toast from "react-hot-toast";

interface UseDeleteProps<TData, TVariables> {
  url: string;
  options?: Omit<UseMutationOptions<TData, unknown, TVariables>, "mutationFn">;
  successMessage?: string;
}

export function useDelete<TData = unknown, TVariables = unknown>({
  url,
  options,
  successMessage = "حذف با موفقیت انجام شد",
}: UseDeleteProps<TData, TVariables>) {
  return useMutation<TData, unknown, TVariables>({
    mutationFn: async (variables) => {
      const { data } = await axiosInstance.delete<TData>(url, { data: variables });
      return data;
    },
    onSuccess: (data, variables, context) => {
      toast.success(successMessage);
      options?.onSuccess?.(data, variables, context);
    },
    ...options,
  });
}
