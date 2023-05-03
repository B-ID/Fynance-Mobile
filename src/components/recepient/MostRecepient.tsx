import { Box, Text, HStack } from '@chakra-ui/react';
import React from 'react';
import SingleRecipient from './SingleRecipient';
import { recepientData } from './recepientData';

type Props = {};

export default function MostRecepient({}: Props) {
  return (
    <Box mb='32px'>
      <Text mb={'24px'} fontSize={'18px'} fontWeight={'bold'} color={'white'}>
        Most Recepient
      </Text>
      <HStack
        sx={{
          '::-webkit-scrollbar': {
            display: 'none',
          },
        }}
        overflowX={'scroll'}
        spacing={'24px'}>
        {recepientData.map((data) => (
          <SingleRecipient imgUrl={data.imgUrl} name={data.name} />
        ))}
      </HStack>
    </Box>
  );
}
