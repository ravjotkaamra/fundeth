import { Heading, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import Item from "./Item";
import { SiGooglemaps, SiGmail } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";

const Details = () => {
  return (
    <VStack
      as="section"
      p={{ base: 3, md: 10 }}
      alignItems="left"
      // outline="solid red 2px"
      shadow="xl"
      rounded="sm"
      style={{
        background: "#bdc3c7",
        background: "-webkit-linear-gradient(top left, #bdc3c7, #2c3e50)",
        background: "-moz-linear-gradient(top left, #bdc3c7, #2c3e50)",
        background: "linear-gradient(to bottom right, #bdc3c7, #2c3e50)",
      }}
    >
      <Text
        variant="description"
        color="blue.800"
        fontSize="2xl"
        textAlign="left"
        fontFamily="Oswald"
      >
        Contact Us
      </Text>
      <Heading
        size="2xl"
        as="h2"
        textAlign="left"
        letterSpacing={1.8}
        style={{
          fontVariantCaps: "all-petite-caps",
        }}
        fontFamily="Oswald"
      >
        Get in Touch
      </Heading>
      <Item
        icon={SiGooglemaps}
        text="Sector-C, Sainik Colony, Near Heritage School, Jammu, J&K, 180011"
        label="location icon"
      />
      <Item
        icon={FiPhoneCall}
        text="7006899304 or 9797550704"
        label="mobile phone icon"
      />
      <Item
        icon={SiGmail}
        text="crossfitclub777@gmail.com"
        label="email icon"
      />
    </VStack>
  );
};

export default Details;
