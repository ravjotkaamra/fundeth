import { AspectRatio, Box } from '@chakra-ui/layout';
import React from 'react';

const Map = () => {
  return (
    <Box m={4} p={4}>
      <AspectRatio ratio={16 / 9} maxW="1080px" maxH="550px" m="auto">
        <iframe
          src="https://maps.google.com/maps?q=Crossfit%20club,%20Sector-C,%20Sainik%20Colony,%20Jammu,%20Jammu%20and%20Kashmir%20180011&t=&z=13&ie=UTF8&iwloc=&output=embed"
          alt="crossfit club map Sanik Colony, Jammu"
        />
      </AspectRatio>
    </Box>
  );
};

export default Map;
