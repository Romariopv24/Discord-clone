'use client';
import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/system';

export function ListLayout() {
  return (
    <MainContainer>
      <h1>Hola</h1>
    </MainContainer>
  );
}

const MainContainer = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: '100vh',
}));
