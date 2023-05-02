import {
  Box,
  Button,
  Flex,
  HStack,
  PinInput,
  PinInputField,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';


export default function LoginForm() {
  const [pin, setPin] = useState('');
  const isPinComplete = pin.length === 6;

  return (
    <Box>
      <Box mb={'48px'} borderColor={'red'} border={1}>
        {/* Form Title */}
        <Text fontWeight={'semibold'} mb={'12px'} color='white' fontSize={22}>
          Hello Lucia!
        </Text>
        <Text color='#919191' fontSize={14}>
          +84 123 456 789. Please enter your PIN Code
        </Text>
      </Box>

      {/* PIN Input */}
      <Flex
        direction={'column'}
        gap={'40px'}
        align={'center'}
        justify={'center'}
        mb='213px'>
        <HStack color={'white'}>
          <PinInput
            autoFocus
            // size={'xs'}
            variant={'unstyled'}
            mask={true}
            value={pin}
            onChange={(e) => setPin(e)}>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>

        {/* Terms & Conditions */}
        <Box fontSize={12} textAlign='center'>
          <Text
            color='#3180E7'
            _hover={{
              textDecoration: 'underline',
            }}>
            Forgot PIN
          </Text>
        </Box>
      </Flex>

      {/*  Register Button */}
      <Button
        height={'50px'}
        borderRadius={'16px'}
        isDisabled={!isPinComplete}
        bg={`${isPinComplete ? '#FDBC44' : '#595959'}`}
        _hover={{
          background: '',
        }}
        w='full'>
        <Text
          fontWeight='bold'
          fontSize={14}
          color={`${isPinComplete ? '#1d1d1d' : 'white'}`}>
          Continue
        </Text>
      </Button>
    </Box>
  );
}
