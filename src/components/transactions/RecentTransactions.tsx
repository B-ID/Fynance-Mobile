import React from 'react';
import { Box, Stack, Text, VStack } from '@chakra-ui/react';
import { youtube, airbnb, playstation, patreon, netflix } from '@/assets/logos';
import SingleTransaction from './SingleTransaction';

type Props = {};

export default function RecentTransactions({}: Props) {
  return (
    <Box mb='32px'>
      <Text fontSize={'18px'} fontWeight={'bold'} color={'white'} mb={'24px'}>
        Recent Transactions
      </Text>

      {/* transactions */}
      <Stack spacing={'24px'}>
        <SingleTransaction imgUrl={youtube} title='Youtube Premium' />
        <SingleTransaction imgUrl={netflix} title='Netflix Premium' />
        <SingleTransaction imgUrl={patreon} title='Patreon Membership' />
        <SingleTransaction imgUrl={playstation} title='Playstation' />
        <SingleTransaction imgUrl={airbnb} title='Airbnb' />
      </Stack>
    </Box>
  );
}
