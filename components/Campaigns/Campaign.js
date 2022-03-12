import {
  Button,
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { chakra } from "@chakra-ui/react";

const Campaign = ({ token }) => {
  const [donationAmount, setDonationAmount] = useState("0");
  const bg2 = useColorModeValue("white", "gray.800");

  const onClick = () => {
    console.log("donationAmount :>> ", donationAmount);
  };

  return (
    <Flex direction={{ base: "row", md: "column" }} bg={bg2} color="gray.400">
      <SimpleGrid
        spacingY={3}
        columns={{ base: 1, md: 4 }}
        w="full"
        py={2}
        px={10}
        fontWeight="hairline"
      >
        <span>{token.title}</span>
        <chakra.span
          textOverflow="ellipsis"
          overflow="hidden"
          whiteSpace="nowrap"
        >
          {token.duration}
        </chakra.span>
        <Flex>
          <Button
            as="div"
            size="sm"
            variant="solid"
            //   leftIcon={<Icon as={AiTwotoneLock} />}
            colorScheme="purple"
          >
            {token.amountToBeRaised} / {token.amountRaised}
          </Button>
        </Flex>
        <Flex justify={{ md: "end" }}>
          <NumberInput
            onChange={(valueString) => setDonationAmount(valueString)}
            value={donationAmount}
            precision={18}
            step={1}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          <Button
            color="gray.300"
            size="md"
            bg="blue.500"
            _hover={{ bg: "blue.600" }}
            variant="solid"
            onClick={onClick}
          >
            Donate
          </Button>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
};

export default Campaign;
