import { Button, Heading } from '@chakra-ui/react';
import { chakra } from '@chakra-ui/system';
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import FormInput from './FormInput';
import { useState } from 'react';
import { Stack, VStack } from '@chakra-ui/layout';
import { motion } from 'framer-motion';
import { simpleOpacity } from '../../config/animations';

const Form = () => {
  // if the user submits the contact us form
  const handleSubmit = (event) => {
    event.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
    window.location.href =
      'mailto:crossfitclub777@gmail.com?subject=' +
      name +
      ' (' +
      email +
      ')' +
      '&body=' +
      message;
  };
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const MotionButton = motion(Button);

  return (
    <VStack p={2} bgColor="blackAlpha.200" shadow="lg" rounded="sm">
      <Heading
        size="lg"
        as="h2"
        textAlign="center"
        letterSpacing={1.4}
        fontFamily="Oswald"
      >
        Leave A Message
      </Heading>
      <chakra.form
        onSubmit={handleSubmit}
        p={{ base: 3, md: 5 }}
        mt={{ base: 3, lg: 0 }}
        // action="mailto:crossfitclub777@gmail.com"
        method="GET"
      >
        <VStack spacing={10}>
          <Stack spacing={4}>
            <FormInput
              id="name"
              title="Name"
              place
              icon={AiOutlineUser}
              type="text"
              placeholder="Enter your name"
              formValue={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FormInput
              id="email"
              title="Email"
              icon={AiOutlineMail}
              type="email"
              placeholder="Enter your email"
              formValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
              id="message"
              title="Message"
              // icon={BsPencil}
              // type="text"
              placeholder="Enter your message here"
              formValue={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Stack>
          <Stack>
            <MotionButton
              type="submit"
              size="lg"
              variant="outline"
              borderWidth="1px"
              borderRadius="0"
              fontWeight="normal"
              fontSize="sm"
              width="120px"
              variants={simpleOpacity}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              SEND
            </MotionButton>
          </Stack>
        </VStack>
      </chakra.form>
    </VStack>
  );
};
export default Form;
