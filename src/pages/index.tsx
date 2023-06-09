import Head from 'next/head';
import { Box, Stack } from '@chakra-ui/react';
import { Background, LoginForm, RegisterForm } from '@/components';
import { useState } from 'react';
import useGetTabs from '@/hooks/getTabs';

export enum RegistrationTabEnum {
  login,
  register,
}

export default function Home() {
  const { getTab, changeTab, currentTab } = useGetTabs();

  return (
    <>
      <Head>
        <title>Fynance Mobile</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Stack pos='relative' h='100vh'>
        <Box>
          {/* Background Pattern Image */}
          <Background changeTab={changeTab} />

          <Box
            pos='absolute'
            borderTopRadius='24px'
            bottom='0'
            w='full'
            zIndex={2}
            height={517}
            bg='#232323 '
            px='24px'
            pt='24px'
            pb='42px'>
            {/* Register & Login Tab */}
            {getTab(currentTab)}
          </Box>
        </Box>
      </Stack>
    </>
  );
}
