import React from 'react';
import { Flex, Image, Box, Text } from '@chakra-ui/react';
import { ITransactionProps } from './transactions.types';

export default function SingleTransaction({
  imgUrl,
  title,
}: ITransactionProps) {
  return (
    <Flex gap={'20px'} align={'center'}>
      <Box
        flexShrink={0}
        boxSize={'48px'}
        p={'8px'}
        bg='#343434'
        borderRadius={'8px'}>
        <Image src={imgUrl.src} alt='youtube-logo' />
      </Box>

      <Box w='full'>
        <Flex justify='space-between' align='center'>
          {/* Transaction title */}
          <Box>
            <Text mb={'8px'} color={'white'} fontSize={'14px'}>
              {title}
            </Text>
            <Text color={'#919191'} fontSize={'12px'}>
              Sep 19, 2021
            </Text>
          </Box>

          {/* Transaction price */}
          <Text color={'white'} fontSize={'12px'} fontWeight={'semibold'}>
            -$50.00
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}
