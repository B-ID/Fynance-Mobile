import { Deals, Header, MostRecepient, Progress, SectionMenu, RecentTransactions } from '@/components'
import { Box} from '@chakra-ui/react'


export default function HomePage() {
  return (
    <Box pb='16px' px='16px' bg='#232323' minH='100vh'>
        <Header />
        <Progress />
        <SectionMenu/>
        <Deals />
        <MostRecepient />
        <RecentTransactions />
    </Box>
  )
}