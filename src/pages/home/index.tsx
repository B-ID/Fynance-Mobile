import {
  Deals,
  Header,
  MostRecepient,
  Progress,
  SectionMenu,
  RecentTransactions,
  BottomNavigation,
} from '@/components';
import { Box } from '@chakra-ui/react';

export default function HomePage() {
  return (
    <Box bg='#232323' px={4} pos={'relative'}>
      <Box
        sx={{
          '::-webkit-scrollbar': {
            display: 'none',
          },
        }}
        pb='40px'
        overflowY={'scroll'}
        h='100vh'>
        <Header />
        <Progress />
        <SectionMenu />
        <Deals />
        <MostRecepient />
        <RecentTransactions />
      </Box>
      <Box>
        <BottomNavigation />
      </Box>
    </Box>
  );
}
