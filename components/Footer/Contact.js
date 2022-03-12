import { Heading, List, ListIcon, ListItem, VStack } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import React from "react";
import { SiGooglemaps, SiGmail } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  const ContactItem = ({ icon, children }) => {
    return (
      <ListItem display="flex" alignItems="center">
        <ListIcon
          as={icon}
          color="cyan.100"
          bgColor="blackAlpha.50"
          rounded="full"
          p={2}
          mr={4}
          boxSize={12}
        />
        {children}
      </ListItem>
    );
  };

  return (
    <VStack
      shadow="2xl"
      roundedBottomLeft="md"
      roundedTopLeft="md"
      flexBasis={{ base: "100%", md: "40%" }}
      alignItems="left"
    >
      <Heading fontFamily="Oswald" as="h2" p={4}>
        CROSSFIT CLUB
      </Heading>
      <List spacing={10} p={4}>
        <ContactItem icon={SiGooglemaps}>
          <chakra.a
            rel="noreferrer"
            href="https://goo.gl/maps/9XF5anspNzHxWe2B9"
            target="_blank"
            textDecorationLine="underline"
            textDecorationColor="blue.100"
            fontSize={{ base: "sm", lg: "md" }}
          >
            <span>Sector-C, Sainik Colony, Near Heritage School</span>
            <div>Jammu, J{"&"}K, 180011</div>
          </chakra.a>
        </ContactItem>

        <ContactItem icon={FiPhoneCall}>
          <div>
            <chakra.a href="tel:7006899304" fontSize={{ base: "sm", lg: "md" }}>
              7006899304 |{" "}
            </chakra.a>
            <chakra.a href="tel:9797550704" fontSize={{ base: "sm", lg: "md" }}>
              9797550704
            </chakra.a>
          </div>
        </ContactItem>

        <ContactItem icon={SiGmail}>
          <chakra.a
            href="mailto:crossfitclub777@gmail.com"
            fontSize={{ base: "sm", lg: "md" }}
          >
            crossfitclub777@gmail.com
          </chakra.a>
        </ContactItem>
      </List>
    </VStack>
  );
};

export default Contact;
