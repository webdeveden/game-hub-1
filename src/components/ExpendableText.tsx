import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Prop {
  children: string;
}

const ExpendableText = ({ children }: Prop) => {
  const [expended, setExpended] = useState(false);

  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expended ? children : children.substring(0, limit) + "...";

  return (
    <Text marginBottom={5}>
      {summary}
      <Button
        size="sm"
        marginLeft={1}
        colorScheme="yellow"
        fontWeight="bold"
        onClick={() => setExpended(!expended)}
      >
        {expended ? "show less" : "show more"}
      </Button>
    </Text>
  );
};

export default ExpendableText;
