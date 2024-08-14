import { usePathname } from "@/navigation";
import useGetQueryParams from "./useGetQueryParams";

export const useGetSearchURL = (params?: { [key: string]: string }) => {
  const path = usePathname();
  const newQuery = useGetQueryParams(params);

  return `${path.includes("/search") ? path : "/search"}?${newQuery}`;
};
