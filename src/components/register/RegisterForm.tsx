import React, { useState } from 'react';
import { Box, Text, Flex, Input, Button } from '@chakra-ui/react';
import { RegistrationTabEnum } from '@/pages';
import { IRegisterFormProps } from './register.types';

export default function RegisterForm({ changeTab }: IRegisterFormProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const isFieldComplete = inputValue.length === 9;

  return (
    <Box>
      <Box mb={'48px'} borderColor={'red'} border={1}>
        {/* Form Title */}
        <Text fontWeight={'semibold'} mb={'12px'} color='white' fontSize={22}>
          Welcome to Fynance
        </Text>
        <Text color='#919191' fontSize={14}>
          Enter your phone number to login or register
        </Text>
      </Box>

      {/* Number Input */}
      <Box mb='213px'>
        <Flex align='center' gap='15px'>
          <Text fontWeight='bold' color='#919191' fontSize={18}>
            +84
          </Text>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            fontSize={18}
            type='text'
            minLength={9}
            maxLength={9}
            variant='flushed'
            color='white'
            required
          />
        </Flex>
      </Box>

      {/* Terms & Conditions */}
      <Box mb={'16px'} fontSize={12} textAlign='center'>
        <Text color='#919191'>By using fynance you agree to Fynance's</Text>
        <Text color='#FDBE44'>terms and conditions</Text>
      </Box>

      {/*  Register Button */}
      <Button
        onClick={() => changeTab(RegistrationTabEnum.login)}
        height={'50px'}
        borderRadius={'16px'}
        isDisabled={!isFieldComplete}
        bg={`${isFieldComplete ? '#FDBC44' : '#595959'}`}
        _hover={{
          background: '',
        }}
        w='full'>
        <Text
          fontWeight='bold'
          fontSize={14}
          color={`${isFieldComplete ? '#1d1d1d' : 'white'}`}>
          Continue
        </Text>
      </Button>
    </Box>
  );
}
