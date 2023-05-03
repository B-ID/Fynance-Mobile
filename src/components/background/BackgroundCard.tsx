import { Box, Image, Text, Flex } from '@chakra-ui/react';
import React from 'react';
import pattern from '../../assets/images/patterns.png';
import { IBackgroundCardProps } from './backgroundCard.types';

export default function BackgroundCard({
  children,
  width = 'full',
  height = '123px',
  background = '#124E9D',
}: IBackgroundCardProps) {
  return (
    <Box
      overflow='hidden'
      pos='relative'
      borderRadius='16px'
      h={height}
      w={width}
      bg={background}>
      {/* Stats details */}
      <Image
        objectFit='cover'
        w='full'
        h='full'
        src={pattern.src}
        alt='pattern'
      />
      {children}
    </Box>
  );
}
