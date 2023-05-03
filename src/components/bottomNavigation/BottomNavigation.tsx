import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import { transaction, home, wallet, settings } from '@/assets/icons';

type Props = {};

export default function BottomNavigation({}: Props) {
  return (
    <Box
      position={'absolute'}
      right={4}
      bottom={0}
      h='60px'
      w='93%'
      bg='#343434'
      borderRadius={'16px'}>
      <Flex h='full' justify={'space-around'} align={'center'}>
        <Image src={home.src} boxSize={'32px'} />
        <Image src={wallet.src} boxSize={'32px'} />
        <Image src={transaction.src} boxSize={'32px'} />
        <Image src={settings.src} boxSize={'32px'} />
      </Flex>
    </Box>
  );
}
