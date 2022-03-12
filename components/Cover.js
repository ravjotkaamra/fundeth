import { Box, Flex, Heading } from '@chakra-ui/layout';
import React from 'react';
import { Image as ChakraImage } from '@chakra-ui/image';
import { mobileBreakpointsMap } from '../config/theme';
import { useBreakpointValue } from '@chakra-ui/media-query';

const Cover = ({ src, alt, text, objectPosition = 'default' }) => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap);

  return (
    <Flex alignItems="center" justifyContent="center" pos="relative" h="60vh">
      <ChakraImage
        h="full"
        w="full"
        alt={alt}
        src={src}
        objectFit="cover"
        objectPosition={objectPosition}
        loading="lazy"
      />

      <Heading
        textAlign="center"
        as="h2"
        lineHeight="1em"
        fontSize={isMobile ? '2em' : '5em'}
        fontWeight="bold"
        color="#fff"
        pos="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex={1}
      >
        {text}
      </Heading>
    </Flex>
  );
};

export default Cover;
