import { Box, Flex, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import Links from "./Links";
import SocialMedia from "./SocialMedia";
import { chakra } from "@chakra-ui/system";
import Contact from "./Contact";

const Footer = () => {
  return (
    <Flex
      as="footer"
      display="flex"
      w="full"
      pt={10}
      px={10}
      pb={5}
      // bgColor="orange.800"
      bgColor="whiteAlpha.100"
      justifyContent="center"
      flexWrap="wrap"
      style={{
        background: "#232526",
        background: "-webkit-linear-gradient(top left, #232526, #000000)",
        background: "-moz-linear-gradient(top left, #232526, #000000)",
        background: "linear-gradient(to bottom right, #232526, #000000)",
      }}
    >
      <Contact />
      <VStack
        // outline="solid red 2px"
        flexBasis={{ base: "100%", md: "60%" }}
        p={5}
        shadow="2xl"
      >
        <SocialMedia />
        <Links />
        <Box
          // outline="solid red 2px"
          textAlign="center"
          p={10}
        >
          <Text fontSize="lg" fontWeight="medium">
            JOIN{" "}
            <chakra.span fontWeight="bold" color="orange.500" as="strong">
              CROSSFIT CLUB{" "}
            </chakra.span>
            AND DARE TO BE GREAT
          </Text>
        </Box>
      </VStack>
    </Flex>
  );
};

export default Footer;
