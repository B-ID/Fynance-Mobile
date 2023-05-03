import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import avatar from '../../assets/avatar.png';
import { BiBell } from 'react-icons/bi';
import { BsChatSquareDots } from 'react-icons/bs';
import copy from '../../assets/icons/copy.png';
import BackgroundCard from '../background/BackgroundCard';


export default function Header() {
  return (
    <>
      <Box mb='16px'>
        <Box mb='20px'>
          <Flex pt='56px' justify='space-between'>
            {/* Header left */}
            <Flex gap='12px' align='center'>
              <Image h='40px' w='40px' src={avatar.src} />

              <Box>
                <Text fontSize='20px' fontWeight='semibold' color='white'>
                  Hi Lucia
                </Text>
                <Text fontSize='12px' color='#919191'>
                  Have a nice day!
                </Text>
              </Box>
            </Flex>

            {/* Header right */}
            <Flex gap='23.6px' align='center' color='white'>
              <BsChatSquareDots size={24} />
              <BiBell size={28} />
            </Flex>
          </Flex>
        </Box>

        {/* Header Stats */}
        <BackgroundCard>
          <Box
            pt='14.5px'
            w='70%'
            borderLeftRadius='16px'
            pl='20px'
            bgGradient='linear(to-r, #124E9D, #124E9D, transparent)'
            h='full'
            pos='absolute'
            top='0'
            left='0'>
            <Text color='#d3d3d3' fontSize='12px'>
              Balance
            </Text>
            <Text
              mb='9.5px'
              fontSize='28px'
              fontWeight='semibold'
              color='white'>
              $6,412
            </Text>
            <Flex
              display='inline-flex'
              borderRadius='8px'
              align='center'
              gap='9.33px'
              py='4px'
              px='8px'
              bg='black'>
              <Text fontSize='12' color='white'>
                4125123535
              </Text>
              <Image src={copy.src} h='16px' w='16px' />
            </Flex>
          </Box>
        </BackgroundCard>
      </Box>
    </>
  );
}
