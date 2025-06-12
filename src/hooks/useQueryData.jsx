import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../utils/queryKeys";
import { fetchSheetData } from "../services/fetchGoogleSheetData";

const useQueryData = (queryName) => {
  const currentQuery = QUERY_KEYS[queryName];
  return useQuery({
    queryKey: currentQuery?.key, // queryKey is now unique per sheetKey and URL
    queryFn: () => fetchSheetData(currentQuery?.url),
    retry: 1,
  });
};

export default useQueryData;
