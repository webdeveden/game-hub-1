import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";

import APIClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClientGenres = new APIClient<Genre>("/genres");

// const useGenres = () => ({ data: genres, isLoading: false, error: null })
// using react-query to fetch genres
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClientGenres.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: genres.length, next: null, results: genres }, // Initial data to avoid flickering
  });

export default useGenres;
