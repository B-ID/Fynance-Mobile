import { Deals, Header, MostRecepient, Progress } from '@/components'
import { Box, Text } from '@chakra-ui/react'
import SectionMenu from '@/components/sectionMenu/SectionMenu'


export default function HomePage() {
  return (
    <Box px='16px' bg='#232323' minH='100vh'>
        <Header />
        <Progress />
        <SectionMenu/>
        <Deals />
        <MostRecepient />
    </Box>
  )
}