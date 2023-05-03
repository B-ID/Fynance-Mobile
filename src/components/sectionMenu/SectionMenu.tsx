import { Box, Grid, Menu, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import MenuOption from './MenuOption';
import { sectionMenuData } from './sectionMenuData';
import { ISectionMenuProps } from './sectionMenu.types';

export default function SectionMenu() {
  return (
    <SimpleGrid mb={'32px'} rowGap={'36px'} columns={4} px={'16px'} py={'12px'}>
      {sectionMenuData.map((data) => (
        // @ts-ignore
        <MenuOption Icon={data?.Icon} title={data.title} />
      ))}
    </SimpleGrid>
  );
}
