import React from 'react';
import OpenGraphHead from '../../components/Misc/OpenGraphHead';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/layout';
import Image from '../../components/Image';
import Cover from '../../components/Cover';

const About = () => {
  return (
    <>
      <OpenGraphHead
        title="About Us | Crossfit Club Jammu"
        type="profile"
        url="https://crossfitclub.in/about"
      />
      <Menu />
      <main>
        <Cover
          src="/slide-2.jpg"
          alt="about us page background"
          text="About Us"
        />
        <Flex
          p={2}
          m={2}
          flexDir={{ base: 'column', md: 'row' }}
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          // outline="solid red 2px"
        >
          <VStack
            flexBasis="40%"
            // outline="solid red 2px"
            m={{ base: 0, md: 5 }}
            p={{ base: 4, sm: 6, md: 10 }}
            justifyContent="flex-start"
            alignItems="flex-start"
            textAlign="left"
          >
            <Heading
              fontFamily="Oswald"
              size="2xl"
              as="h2"
              letterSpacing={1.8}
              style={{
                fontVariantCaps: 'all-petite-caps',
              }}
            >
              About Crossfit Club
            </Heading>
            <Text
              pt={{ base: 2, md: 4 }}
              variant="description"
              fontSize={{ base: 'sm', md: 'md' }}
            >
              Join a welcoming gym that exists to help you get to a healthier
              place - by giving the right support at the right times, in the
              ways you want.
            </Text>
            <Text
              pt={{ base: 2, md: 4 }}
              variant="description"
              fontSize={{ base: 'sm', md: 'md' }}
            >
              Crossfit Club Jammu is a fitness gym for Men and Women by Gundeep
              Singh - Gold Medallist Mr J&K 2018. Crossfit has the certified
              trainers that will help you to achieve your fitness goals. We’ve
              got all the equipment you need to sprint, jog or walk your way to
              your fitness goals.
            </Text>
          </VStack>
          <Flex
            flexBasis="50%"
            // outline="solid red 2px"
            justifyContent="center"
            alignItems="center"
            p={{ base: 4, sm: 6, md: 10 }}
            rounded="2xl"
            style={{
              background: '#000',
              background: '-webkit-linear-gradient(to right, #000, #333333)',
              background: 'linear-gradient(to right, #000, #333333)',
            }}
          >
            <Image
              src="/crossfit/cfc-logo.jpg"
              alt="crossfit club logo"
              height={480}
              width={720}
              objectFit="contain"
              // outline="solid red 2px"
            />
          </Flex>
        </Flex>
      </main>
      <Footer />
    </>
  );
};

export default About;
