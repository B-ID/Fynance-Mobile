import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import chart from '../../assets/chart.png';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function Progress() {
  return (
    <Box
      mb={'14px'}
      pos={'relative'}
      border={'1px'}
      borderRadius={'16px'}
      color={'#494949'}>
      <Box pos={'absolute'} top={2} right={4}>
        <AiOutlineCloseCircle color='#BABABA' />
      </Box>
      <Flex gap={'16px'} p='16px' align={'center'}>
        <Image objectFit={'cover'} src={chart.src} h={'40px'} w={'40px'} />
        <Text fontSize={'12px'} color={'#BABABA'}>
          Your spending decreased -10% from last month. Good job
        </Text>
      </Flex>
    </Box>
  );
}
