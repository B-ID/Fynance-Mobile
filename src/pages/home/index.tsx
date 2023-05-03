import { Header } from '@/components'
import { Box, Text } from '@chakra-ui/react'
import {Progress} from '@/components'
import SectionMenu from '@/components/sectionMenu/SectionMenu'


export default function HomePage() {
  return (
    <Box px='16px' bg='#232323' minH='100vh'>
        <Header />
        <Progress />
        <SectionMenu/>
    </Box>
  )
}