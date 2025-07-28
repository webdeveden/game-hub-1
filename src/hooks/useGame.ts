import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Game } from "./Game";

const apiClient = new APIClient<Game>("/games");
console.log(apiClient);

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGame;
