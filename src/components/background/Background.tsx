import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import pattern from '../../assets/images/patterns.png';
import { RegistrationTabEnum } from '@/pages';
import { IRegisterFormProps } from '../register/register.types';
import { ArrowBackIcon } from '@chakra-ui/icons';

export default function Background({ changeTab }: IRegisterFormProps) {
  return (
    <Box pos='relative' bg={'#124E9D'} height={383}>
      {/* Back Button */}
      <Box
        onClick={() => changeTab(RegistrationTabEnum.register)}
        pos='absolute'
        top='8px'
        left='16px'
        color='#232323'
        borderRadius='full'
        bg='#FDBC44'
        p={1}>
        <ArrowBackIcon boxSize={6} />
      </Box>

      {/* Background pattern */}
      <Image
        objectFit='cover'
        w='full'
        h='full'
        src={pattern.src}
        alt='pattern'
      />
    </Box>
  );
}
