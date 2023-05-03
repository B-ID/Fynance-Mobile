import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { ISectionMenuProps } from './sectionMenu.types';

export default function MenuOption({ Icon, title }: ISectionMenuProps) {
  return (
    <Box cursor={'pointer'}>
      <Flex direction={'column'} align={'center'}>
        <Box
          mb={'8px'}
          borderRadius={'8px'}
          boxSize={'48px'}
          bg={'#343434'}
          _hover={{
            background: '#124E9D',
          }}
          p={'12px'}>
          <Image src={Icon.src} />
        </Box>
        <Text fontSize={'14px'} color={'white'}>
          {title}
        </Text>
      </Flex>
    </Box>
  );
}
