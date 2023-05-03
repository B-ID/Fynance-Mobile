import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import BackgroundCard from '../background/BackgroundCard';

type Props = {};

export default function Deals({}: Props) {
  return (
    <Box mb='20px'>
      <Text fontSize={'18px'} fontWeight={'bold'} mb={'20px'} color={'white'}>
        Deals
      </Text>
      {/* carousel */}
      <Box
        sx={{
          '::-webkit-scrollbar': {
            display: 'none',
          },
        }}
        overflowX={'scroll'}
        display={'flex'}
        gap={'12px'}>
        <Box>
          <BackgroundCard width='254px' height='134px'>
            <Box
              bgGradient='linear(to-r, #124E9D, #124E9D, transparent)'
              h='full'
              w='70%'
              pos={'absolute'}
              bottom='0'
              p={'16px'}
              pt={'60px'}>
              <Text fontSize={'16px'} fontWeight={'semibold'} color={'white'}>
                Promotion
              </Text>
              <Text fontSize={'16px'} fontWeight={'semibold'} color={'white'}>
                Banner
              </Text>
            </Box>
          </BackgroundCard>
        </Box>
        <Box>
          <BackgroundCard width='254px' height='122px' background='#2D2D2D'>
            <Box
              bgGradient='linear(to-r, #2D2D2D, #2D2D2D, transparent)'
              h='full'
              w='70%'
              pos={'absolute'}
              bottom='0'
              p={'16px'}
              pt={'60px'}>
              <Text fontSize={'16px'} fontWeight={'semibold'} color={'white'}>
                Promotion
              </Text>
              <Text fontSize={'16px'} fontWeight={'semibold'} color={'white'}>
                Banner
              </Text>
            </Box>
          </BackgroundCard>
        </Box>
      </Box>
    </Box>
  );
}
