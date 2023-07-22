import { useQuery } from "@tanstack/react-query";
import type { UseQueryResult } from "@tanstack/react-query";
import type { AxiosError, AxiosResponse } from "axios";
import { QUERIES } from "constants/queries";
import { useEffect } from "react";
import { apiGetCardGameStatus } from "restapi";

type DefaultAxiosError = AxiosError<{ message: string }>;

type CustomQueryResult<T> = Omit<
  UseQueryResult<AxiosResponse<T>, DefaultAxiosError>,
  "refetch"
>;

export function useGetCardGameStatus(
  address: string,
  interval = false
): CustomQueryResult<string> {
  const { data, isLoading, isError, error, refetch, ...rest } = useQuery<
    AxiosResponse<string>,
    DefaultAxiosError
  >(
    QUERIES.cardGameStatus,
    async (): Promise<AxiosResponse<string>> =>
      apiGetCardGameStatus(address ? address : "").then((res) => {
        return res;
      }),
    {
      retry: false,
      enabled: address != null,
      keepPreviousData: false,
      refetchInterval: interval ? 2000 : false,
    }
  );

  useEffect(() => {
    if (address == null) {
      return;
    }
    refetch();
  }, [address, refetch]);
  return { data, isError, error, isLoading, ...rest };
}
