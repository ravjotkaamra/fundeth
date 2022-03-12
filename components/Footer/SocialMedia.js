import Icon from "@chakra-ui/icon";
import { Box, Link } from "@chakra-ui/layout";
import React from "react";
import { SocialMedias } from "../../config/sidebar";
import { motion } from "framer-motion";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { simpleOpacity } from "../../config/animations";

const SocialMedia = () => {
  const MotionBox = motion(Box);
  const iconSize = useBreakpointValue({ base: 6, md: 7, lg: 8, xl: 9 });
  return (
    <MotionBox d="flex" variants={simpleOpacity} mx="auto">
      {SocialMedias?.map((socMedia) => (
        <Link
          variant="description"
          key={socMedia.label}
          aria-label={socMedia.label}
          rel="noreferrer"
          width={8}
          href={socMedia.href}
          target="_blank"
          _focus={{ boxShadow: "none" }}
          mx={{ base: 2, sm: 3, md: 4, lg: 5, xl: 6 }}
        >
          <Icon
            w={iconSize}
            h={iconSize}
            as={socMedia.icon}
            color="whiteAlpha.800"
            _hover={{ color: socMedia.color }}
          />
        </Link>
      ))}
    </MotionBox>
  );
};

export default SocialMedia;
