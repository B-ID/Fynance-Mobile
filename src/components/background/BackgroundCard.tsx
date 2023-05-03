import { Box, Image, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import pattern from '../../assets/patterns.png'
import { IBackgroundCardProps } from './backgroundCard.types'



export default function BackgroundCard({children}: IBackgroundCardProps) {
  return (
        <Box
          overflow='hidden'
          pos='relative'
          borderRadius='16px'
          h='123px'
          bg='#124E9D'>
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
  )
}