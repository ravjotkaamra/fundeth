import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import Image from '../Image.js';
import { Text } from '@chakra-ui/layout';

const Trainer = ({ url, title, text }) => {
  const breakpoints = createBreakpoints({
    base: '75vh',
    sm: '70vh',
  });
  return (
    <Box
      // outline="solid red 2px"
      shadow="lg"
      my={6}
      mx="auto"
      w="full"
      h={breakpoints}
      pos="relative"
    >
      <Image
        layout="fill"
        src={url}
        alt="crossfit club trainer photo"
        objectFit="cover"
        objectPosition="top center"
      />

      <Box
        pos="absolute"
        top="90%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
      >
        <Heading
          as="h4"
          fontSize={['sm', 'md']}
          lineHeight="md"
          color="#fff"
          fontFamily="Roboto"
        >
          {title}
        </Heading>
        <Text fontSize={['xs', 'sm']} color="#fff" fontFamily="Roboto">
          {text}
        </Text>
      </Box>
    </Box>
  );
};

export default Trainer;
