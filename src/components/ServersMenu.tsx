import { Container, Stack } from '@mui/material';

interface MenuOptionsI {
  name: string;
  img: string;
  action: () => void;
}

export function ServersMenu() {
  return (
    <Container>
      <Stack maxWidth={'5rem'}></Stack>
    </Container>
  );
}

const menuOptions: MenuOptionsI[] = [
  {
    name: 'dsasd',
    img: '',
    action: () => {},
  },
];
