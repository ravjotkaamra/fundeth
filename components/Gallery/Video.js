import Icon from '@chakra-ui/icon';
import { AspectRatio, Box } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';
import React, { useRef, useState } from 'react';
import styles from './styles.module.css';
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from 'react-icons/ai';
import { RiMovieLine } from 'react-icons/ri';

const Video = ({ src, preview }) => {
  const [paused, setPaused] = useState(true);
  const [show, setShow] = useState(false);
  const videoRef = useRef(null);

  const handleClick = () => {
    if (paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setPaused((old) => !old);
  };

  const handleRestart = () => {
    videoRef.current.currentTime = 0;
    if (!paused) {
      videoRef.current.play();
    }
  };

  return (
    <Box
      cursor="pointer"
      className={styles.gallery__link}
      onEnded={handleRestart}
      onClick={handleClick}
    >
      <chakra.figure className={styles.gallery__thumb}>
        <AspectRatio ratio={9 / 16} objectPosition="center">
          <Box
            className={styles.gallery__image}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          >
            <video
              ref={videoRef}
              poster={preview}
              preload="none"
              style={{ width: 'full', height: 'full' }}
            >
              <source src={src} />
            </video>
            <Icon
              position="absolute"
              top="1%"
              right="1%"
              as={RiMovieLine}
              color={show ? 'gray' : 'none'}
              w={{ sm: 2, md: 4, lg: 5, xl: 7 }}
              h={{ sm: 2, md: 4, lg: 5, xl: 7 }}
              zIndex={1}
            />
            <Icon
              display={show ? 'block' : 'none'}
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              as={paused ? AiOutlinePlayCircle : AiOutlinePauseCircle}
              w={{ sm: 10, md: 15, lg: 18, xl: 20 }}
              h={{ sm: 10, md: 15, lg: 18, xl: 20 }}
              zIndex={1}
            />
          </Box>
        </AspectRatio>
      </chakra.figure>
    </Box>
  );
};

export default Video;
