import { Box, Flex, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { lucy } from '@/assets/images';
import SingleRecipient from './SingleRecipient';
import { recepientData } from './recepientData';

type Props = {};

export default function MostRecepient({}: Props) {
  return (
    <Box>
      <Text mb={'24px'} fontSize={'18px'} fontWeight={'bold'} color={'white'}>
        Most Recepient
      </Text>

      <Flex
        sx={{
          '::-webkit-scrollbar': {
            display: 'none',
          },
        }}
        overflowX={'scroll'}
        gap={'24px'}>
        {recepientData.map((data) => (
          <SingleRecipient imgUrl={data.imgUrl} name={data.name} />
        ))}
      </Flex>
    </Box>
  );
}
