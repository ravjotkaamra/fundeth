import React, { memo } from 'react';
import { Text, Heading, VStack, SimpleGrid } from '@chakra-ui/react';
import Item from './Item';

const Features = () => {
  return (
    <VStack p={10} m={10} as="section" display="flex">
      <Text
        variant="description"
        color="orange.500"
        fontSize="lg"
        textAlign="center"
      >
        WHY CHOOSE US?
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
        Push Your Limits Forward
      </Heading>
      <SimpleGrid
        minChildWidth={['80px', '100px']}
        spacingX={{ base: 10, lg: 16 }}
        spacingY={10}
        p={[2, 4, 10]}
        mt={6}
        mx="auto"
      >
        <Item
          url="./juice.svg"
          title="Healthy Nutrition Plan"
          text="Achieve your nutritional goals that are tailored specifily to you, Weekly Plan, Food List and more."
        />
        <Item
          url="./cycle.svg"
          title="Modern Equipment"
          text="We offer some of the world’s best fitness equipment, from hi-tech treadmills to ergonomic bikes, cross trainers and many more."
        />
        <Item
          url="./barbell.svg"
          title="Professional Training Plan"
          text="Our expert team of trainers will help you lose weight, get fitter and stronger with a professional training plan."
        />
        <Item
          url="./heart.svg"
          title="Unique to your Needs"
          text="We at Crossfit Club empower you to be healthier by providing required assistance in the ways you desire."
        />
      </SimpleGrid>
    </VStack>
  );
};
export default memo(Features);
