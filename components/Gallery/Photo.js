import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from '@chakra-ui/react';
import { chakra } from '@chakra-ui/system';
import Image from '../Image';
import { Image as ChakraImage } from '@chakra-ui/image';
import { Box } from '@chakra-ui/layout';
import { useDisclosure } from '@chakra-ui/hooks';
import styles from './styles.module.css';
import { useRef } from 'react';
import { IconButton } from '@chakra-ui/button';
import { AiOutlineClose } from 'react-icons/ai';

const Photo = ({ src, width, height }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();

  return (
    <>
      <Box cursor="pointer" className={styles.gallery__link} onClick={onOpen}>
        <chakra.figure className={styles.gallery__thumb}>
          <Image
            src={src}
            alt="Image gallery"
            width={width}
            height={height}
            objectFit="cover"
            className={styles.gallery__image}
          />
        </chakra.figure>
      </Box>

      <Modal
        allowPinchZoom
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        initialFocusRef={initialRef}
        motionPreset="scale"
        size="full"
      >
        <ModalOverlay />
        <ModalContent
          position="relative"
          ref={initialRef}
          onClick={onClose}
          bgColor="rgba(17, 17, 17, 0.95)"
        >
          <ModalHeader hidden={true}>
            Images of inside of crossfit club and its members
          </ModalHeader>

          <IconButton
            isRound
            right="1%"
            variant="ghost"
            position="absolute"
            onClick={onClose}
            color="gray.100"
            size="lg"
            icon={<AiOutlineClose />}
            aria-label="close image modal"
          />

          <ModalBody
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            p={0}
            shadow="xl"
          >
            <ChakraImage
              objectFit="contain"
              src={src}
              alt="Modal Gallery Image"
              rounded="lg"
              m="auto"
              maxW="90vw"
              maxH="80vh"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Photo;
