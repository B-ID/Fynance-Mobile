import { Header } from '@/components'
import { Box, Text } from '@chakra-ui/react'


export default function HomePage() {
  return (
    <Box px='16px' bg='#232323' minH='100vh'>
        <Header />
        <Text color='white'>hello</Text>

    </Box>
  )
}