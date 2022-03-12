import { Flex } from '@chakra-ui/layout';
import React from 'react';
import Cover from '../../components/Cover';
import Menu from '../../components/Menu';
import OpenGraphHead from '../../components/Misc/OpenGraphHead';
import Footer from '../../components/Footer';
import Details from '../../components/Contact/Details';
import Form from '../../components/Contact/Form';
import Map from '../../components/Contact/Map';

const Contact = () => {
  return (
    <>
      <OpenGraphHead
        title="Contact Us | Crossfit Club Jammu"
        type="website"
        url="https://crossfitclub.in/contact"
      />
      <Menu />
      <main>
        <Cover
          src="/gallery/pexels-cesar-galeão-3253501.jpg"
          alt="contact us page background"
          text="Contact Us"
        />
        <Flex
          p={4}
          alignItems="center"
          justifyContent="space-around"
          // outline="solid red 2px"
          flexWrap="wrap"
        >
          <Details />
          <Form />
        </Flex>
        <Map />
      </main>
      <Footer />
    </>
  );
};

export default Contact;
