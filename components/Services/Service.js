import { Flex, Heading, Text, VStack, Divider } from '@chakra-ui/layout';
import React from 'react';
import Image from '../../components/Image';

const Service = ({ text, heading, direction, src, alt }) => {
  return (
    <Flex
      as="article"
      display="flex"
      p={[3, 6, 10]}
      m={2}
      flexDir={{ base: 'column', md: direction }}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      // outline="solid red 2px"
    >
      <VStack
        flexBasis="40%"
        // outline="solid red 2px"
        p={{ base: 4, sm: 6, md: 10 }}
        justifyContent="flex-start"
        alignItems="flex-start"
        textAlign="left"
      >
        <Divider
          justifySelf="flex-start"
          alignSelf="flex-start"
          overflow="hidden"
          color="blue.100"
          display="flex"
          m={0}
          p={0}
          w="5rem"
          borderTop="1.2rem solid"
        />
        <Heading
          fontFamily="Oswald"
          size="2xl"
          as="h2"
          letterSpacing={1.8}
          style={{
            fontVariantCaps: 'all-petite-caps',
          }}
        >
          {heading}
        </Heading>
        <Text
          pt={{ base: 2, md: 4 }}
          color="gray.200"
          variant="description"
          fontSize={{ base: 'sm', md: 'md' }}
        >
          {text}
        </Text>
      </VStack>
      <Flex
        flexBasis="60%"
        // outline="solid red 2px"
        justifyContent="center"
        alignItems="center"
        p={{ base: 4, sm: 6, md: 10 }}
      >
        <Image
          src={src}
          alt={alt}
          height={480}
          width={720}
          objectFit="cover"
          objectPosition="center left"
          // outline="solid red 2px"
        />
      </Flex>
    </Flex>
  );
};

export default Service;
