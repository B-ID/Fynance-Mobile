import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { ISectionMenuProps } from './sectionMenu.types';


export default function MenuOption({Icon, title}: ISectionMenuProps) {
  return (
    <Box>
      <Flex direction={'column'} alignItems={'center'}>
        <Box
          mb={'8px'}
          borderRadius={'8px'}
          boxSize={'48px'}
          bg={'#343434'}
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