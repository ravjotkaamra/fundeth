import { Image } from '@chakra-ui/image';
import { Heading, Text, VStack } from '@chakra-ui/layout';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { simpleOpacity } from '../../config/animations';
{
  /* <Image
          borderRadius="full"
          minW="150px"
          maxW="200px"
          boxSize="auto"
          src={url}
        /> */
}
const Item = ({ url, title, text }) => {
  const MotionImage = motion(Image);
  const [isImageLoaded, setImageLoaded] = useState(false);
  return (
    <VStack>
      <MotionImage
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        borderRadius="full"
        // minW={['40px', '80px']}
        maxW={['60px', '100px', '130px']}
        // boxSize="auto"
        w={['xs', 'md']}
        objectFit="cover"
        src={url}
        fallbackSrc={url}
        alt="Freepik Illustrations https://www.freepik.com/"
        variants={simpleOpacity}
        initial="initial"
        animate={isImageLoaded && 'animate'}
        onLoad={() => setImageLoaded(true)}
        zIndex={2}
      />
      <Heading fontSize={['sm', 'md', 'lg']} textAlign="center" as="h4">
        {title}
      </Heading>
      <Text
        minW={['20px', '60px', '100px']}
        variant="description"
        fontSize="sm"
        textAlign="center"
      >
        {text}
      </Text>
    </VStack>
  );
};

export default Item;
