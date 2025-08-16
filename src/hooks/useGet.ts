import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios";

interface UseGetProps<T> {
    url: string;
    query?: Record<string, any>;
    options?: Omit<UseQueryOptions<T>, "queryKey" | "queryFn">;
}

export function useGet<T = unknown>({
    url,
    query = {},
    options,
}: UseGetProps<T>) {
    return useQuery<T>({
        queryKey: [url, query],
        queryFn: async () => {
            const { data } = await axiosInstance.get<T>(url, { params: query });
            return data;
        },
        ...options,
    });
}
