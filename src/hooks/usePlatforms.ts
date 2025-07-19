import { useQueries, useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const apiClientPlatforms = new APIClient<Platform>("/platforms/lists/parents");

// const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });
//using react-query to fetch platforms
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClientPlatforms.getAll, // Simulating an API call with static data
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: platforms.length, results: platforms }, // Initial data to avoid flickering
  });

export default usePlatforms;
