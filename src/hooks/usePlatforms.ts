import { useQueries, useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });
//using react-query to fetch platforms
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms")
        .then((res) => res.data), // Simulating an API call with static data
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: platforms.length, results: platforms }, // Initial data to avoid flickering
  });

export default usePlatforms;
