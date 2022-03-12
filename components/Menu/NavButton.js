import { Box } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { Button } from "@chakra-ui/react";
import { Router, useRouter } from "next/router";
import React from "react";
import Link from "../Link";
import styles from "./styles.module.css";

const NavButton = ({ text, href, onMenuItemClick, bg, hoverBg }) => {
  const router = useRouter();
  const menuButtonSize = useBreakpointValue({
    base: "xl",
    md: "sm",
  });

  const onClick = (e) => {
    onMenuItemClick(e);
    router.push(href);
  };

  return (
    <Box
      width={{ base: "100%", lg: "auto" }}
      textAlign={{ base: "center", lg: "left" }}
      marginY={{ base: 2, lg: 0 }}
    >
      <Button
        bg={bg}
        _hover={{
          bg: hoverBg,
        }}
        fontWeight="light"
        variant="solid"
        fontSize={menuButtonSize}
        letterSpacing={2}
        className={styles.button}
        padding={3}
        marginX={2}
        onClick={onClick}
      >
        {text}
      </Button>
    </Box>
  );
};

export default NavButton;
