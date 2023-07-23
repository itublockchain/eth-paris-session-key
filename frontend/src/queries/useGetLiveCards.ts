import { useQuery } from "@tanstack/react-query";
import type { UseQueryResult } from "@tanstack/react-query";
import type { AxiosError, AxiosResponse } from "axios";

import { QUERIES } from "constants/queries";
import { useEffect } from "react";
import { apiGetLiveCards, apiGetAllCardList } from "restapi";
import { Cards } from "restapi/types";
export function useGetLiveCards(
  address: string
): Omit<UseQueryResult<AxiosResponse<Array<Cards> | undefined>>, "refetch"> {
  const { data, error, isLoading, isError, isSuccess, refetch, ...rest } =
    useQuery(
      QUERIES.liveCards,
      async (): Promise<AxiosResponse<Array<Cards>>> => {
        const a = await apiGetAllCardList(address)
          .then((res) => {
            return res.data;
          })
          .catch((err) => {
            return err as AxiosError;
            return err.response.data.message;
          });
        return a;
      },
      {
        cacheTime: 0,
        staleTime: 1500,
      }
    );

  useEffect(() => {
    refetch();
  }, [address, refetch]);
  return { data, error, isError, isLoading, isSuccess, ...rest };
}
