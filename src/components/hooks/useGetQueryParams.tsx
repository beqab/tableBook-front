import { useSearchParams } from "next/navigation";

function useGetQueryParams(params?: { [key: string]: string }) {
  const searchParams = useSearchParams();

  const paramsObject = Object.fromEntries(searchParams.entries());

  const newQuery = new URLSearchParams({
    ...paramsObject,
    ...params,
  }).toString();

  return newQuery;
}

export default useGetQueryParams;
