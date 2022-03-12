import Icon from '@chakra-ui/icon';
import { Box, HStack, Text } from '@chakra-ui/layout';
import React from 'react';

const Item = ({ icon, text, label }) => {
  return (
    <HStack
      // outline="solid red 2px"
      m={4}
      p={2}
      spacing={{ base: '2', md: '5' }}
      w="fit-content"
    >
      <Icon
        as={icon}
        rounded="full"
        p={4}
        h="5rem"
        w="5rem"
        // color="#f36100"
        color="cyan.100"
        bgColor="#363636"
        icon={icon}
        aria-label={label}
      />

      <Text variant="description" fontSize="sm" textAlign="left" color="white">
        {text}
      </Text>
    </HStack>
  );
};

export default Item;
