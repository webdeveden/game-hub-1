import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import ExpendableText from "../components/ExpendableText";

interface Props {
  children: string;
}

const GameDetailPage = ({ children }: Props) => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpendableText children={game.description_raw} />
    </>
  );
};

export default GameDetailPage;
