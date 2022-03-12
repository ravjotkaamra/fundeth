import { Box } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import styles from "./styles.module.css";

const LoginBtn = ({ onMenuItemClick }) => {
  const router = useRouter();
  const menuButtonSize = useBreakpointValue({
    base: "xl",
    md: "sm",
  });

  const onClick = (e) => {
    onMenuItemClick(e);
    router.push("/login");
  };

  return (
    <Box
      width={{ base: "100%", lg: "auto" }}
      textAlign={{ base: "center", lg: "left" }}
      marginY={{ base: 2, lg: 0 }}
    >
      <Button
        fontWeight="light"
        borderColor="brand.500"
        variant="outline"
        fontSize={menuButtonSize}
        letterSpacing={2}
        className={styles.button}
        padding={3}
        marginX={2}
        onClick={onClick}
      >
        Log in
      </Button>
    </Box>
  );
};

export default LoginBtn;
