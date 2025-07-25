import { Box, Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames, { Game } from "../hooks/useGames";

import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{(error as Error).message}</Text>;

  //   const pages = [
  //   { results: [game1, game2] },
  //   { results: [game3, game4] },
  //   { results: [game5] },
  // ];

  const totalGames = data?.pages.reduce(
    (total, page) => total + page.results.length,
    0
  );
  // console.log(totalGames);

  return (
    <Box padding="10px">
      <InfiniteScroll
        dataLength={totalGames || 0}
        hasMore={!!hasNextPage}
        next={fetchNextPage}
        loader={<Spinner />}
        endMessage={<p>No more games to load</p>}
      >
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </Box>
  );
};

export default GameGrid;
