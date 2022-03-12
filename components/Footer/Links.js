import { Box } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { motion } from 'framer-motion';
import React from 'react';
import Link from '../Link';
import styles from './styles.module.css';
import { simpleOpacity } from '../../config/animations';

const Links = () => {
  const MotionBox = motion(Box);
  const LinkItem = ({ href, text }) => {
    const fontSize = useBreakpointValue({
      base: 'sm',
      md: 'md',
    });
    const marginSize = useBreakpointValue({ base: 1, sm: 2 });

    return (
      <Link
        fontFamily="Roboto"
        variant="ghost"
        fontSize={fontSize}
        letterSpacing={2}
        className={styles.item}
        padding={2}
        marginX={marginSize}
        as="button"
        href={href}
        rel="noreferrer"
      >
        {text}
      </Link>
    );
  };
  return (
    <MotionBox d="flex" variants={simpleOpacity} mx="auto">
      <LinkItem text="Home" href="/" />
      <LinkItem text="Services" href="/services" />
      <LinkItem text="Contact" href="/contact" />
      <LinkItem text="About" href="/about" />
    </MotionBox>
  );
};

export default Links;
