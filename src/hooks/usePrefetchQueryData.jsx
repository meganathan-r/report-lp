import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../utils/queryKeys";
import { fetchSheetData } from "../services/fetchGoogleSheetData";

const usePrefetchQueryData = (queryName) => {
  const queryClient = useQueryClient();
  const currentQuery = QUERY_KEYS[queryName];
  const prefetch = () => {
    if (currentQuery?.key && currentQuery?.url) {
      return queryClient.prefetchQuery({
        queryKey: currentQuery.key,
        queryFn: () => fetchSheetData(currentQuery.url),
        retry: 1,
      });
    }
  };

  return prefetch;
};

export default usePrefetchQueryData;
