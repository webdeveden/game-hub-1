import { Text } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  console.log(data); // seeing what kind of data we are getting from the API
  // so we can pass it on our interface type(trailer.ts)

  if (isLoading) return null;

  if (error) throw error;
  const firstVideo = data?.results[0];
  return firstVideo ? (
    <video src={firstVideo.data[480]} poster={firstVideo.preview} controls />
  ) : (
    <p>No video preview</p>
  );
};

export default GameTrailer;
