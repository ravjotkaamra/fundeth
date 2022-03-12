import React from "react";
import {
  chakra,
  Flex,
  useColorModeValue,
  Stack,
  SimpleGrid,
  VStack,
  Heading,
  Box,
} from "@chakra-ui/react";
import Campaign from "./Campaign";

export default function Campaigns() {
  const data = [
    {
      title: "Daggy",
      duration: 1,
      amountToBeRaised: 12.5,
      amountRaised: 150.6,
    },
    {
      title: "Anubra",
      duration: 5,
      amountToBeRaised: 12.5,
      amountRaised: 150.6,
    },
    {
      title: "Josef",
      duration: 2,
      amountToBeRaised: 12.5,
      amountRaised: 150.6,
    },
    {
      title: "Sage",
      duration: 12,
      amountToBeRaised: 12.5,
      amountRaised: 150.6,
    },
  ];
  const bg = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("white", "gray.800");
  const bg3 = useColorModeValue("gray.100", "gray.700");

  return (
    <VStack>
      <Box bg="blackAlpha.50" _hover={{ bg: "blackAlpha.300" }} p={10}>
        <Heading>Ongoing fundraising campaigns</Heading>
      </Box>

      <Flex
        w="full"
        bg="black"
        p={50}
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          direction={{ base: "column" }}
          w="full"
          bg={{ md: bg }}
          shadow="lg"
        >
          <SimpleGrid
            spacingY={3}
            columns={{ base: 1, md: 4 }}
            w={{ base: 120, md: "full" }}
            textTransform="uppercase"
            bg={bg3}
            color={"gray.300"}
            py={{ base: 1, md: 4 }}
            px={{ base: 2, md: 10 }}
            fontSize="md"
            fontWeight="hairline"
          >
            <chakra.span fontSize="large" fontWeight="bold">
              Title
            </chakra.span>
            <chakra.span fontSize="large" fontWeight="bold">
              Days Left
            </chakra.span>
            <chakra.span fontSize="large" fontWeight="bold">
              Amount Raised
            </chakra.span>
            <chakra.span
              textAlign={{ md: "right" }}
              fontSize="large"
              fontWeight="bold"
            >
              Donation (in Matic)
            </chakra.span>
          </SimpleGrid>
          {data.map((token, tid) => (
            <Campaign key={tid} token={token} />
          ))}
        </Stack>
      </Flex>
    </VStack>
  );
}
