import React from 'react';
import styles from './styles.module.css';
import { Box, Heading, Text, VStack } from '@chakra-ui/layout';
import Video from './Video';
import Photo from './Photo';

const Gallery = () => {
  return (
    <VStack p={10}>
      <Text
        variant="description"
        color="orange.500"
        fontSize="lg"
        textAlign="center"
      >
        JOIN US NOW
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
        Shape it up!
      </Heading>

      <Box
        p={{ base: 2, sm: 6, md: 8, lg: 10 }}
        mx={{ base: 2, sm: 4, md: 6, lg: 8, xl: 10 }}
      >
        <Box className={styles.gallery}>
          <Box className={styles.gallery__column}>
            <Photo src="/gallery/cfc-1.jpg" width={1200} height={1200} />

            <Photo src="/gallery/gonnysingh.jpg" width={1200} height={1500} />
            <Photo src="/gallery/cfc-4.jpg" width={1200} height={1000} />
          </Box>

          <Box className={styles.gallery__column}>
            <Photo src="/gallery/cfc-3.jpg" width={1200} height={1500} />
            <Photo src="/gallery/group.jpg" width={1200} height={1500} />
            <Photo src="/gallery/cfc-5.jpg" width={1200} height={1000} />
          </Box>

          <Box className={styles.gallery__column}>
            <Photo src="/gallery/cfc.jpg" width={1200} height={1000} />
            <Photo src="/gallery/mrjammu.jpg" width={1200} height={1000} />
            <Video
              src="./videos/preetbail.mp4"
              preview="./videos/preetbail.webp"
            />
          </Box>

          <Box className={styles.gallery__column}>
            <Photo src="/gallery/cfc-6.jpg" width={1200} height={1000} />
            <Photo src="/gallery/cfc-8.jpg" width={1200} height={1000} />
            <Photo src="/gallery/cfc-7.jpg" width={1200} height={1500} />
          </Box>
        </Box>
      </Box>
    </VStack>
  );
};

export default Gallery;
