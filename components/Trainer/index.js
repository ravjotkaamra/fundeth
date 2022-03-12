import React, { memo } from 'react';
import { Text, Heading, VStack } from '@chakra-ui/react';

const Team = () => {
  return (
    <VStack p={10} id="team" m={10}>
      <Text
        variant="description"
        color="orange.500"
        fontSize="lg"
        textAlign="center"
      >
        OUR TEAM
      </Text>
      <Heading
        size="2xl"
        as="h3"
        textAlign="center"
        letterSpacing={1.8}
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Train With Experts
      </Heading>
      {/* <Flex
        position="relative"
        width="1100px"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        padding="30px"
      > */}
      {/* </Flex> */}
    </VStack>
  );
};
export default memo(Team);
