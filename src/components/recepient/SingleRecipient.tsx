import { Flex, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { IRecepientProps } from './recepient.types';

export default function SingleRecipient({ imgUrl, name }: IRecepientProps) {
  return (
    <Flex flexShrink={0} direction={'column'} align={'center'}>
      <Image src={imgUrl.src} alt='lucy' mb='8px' width='56px' height='56px' />
      <Text fontSize={'14px'} color={'#BABABA'}>
        {name}
      </Text>
    </Flex>
  );
}
