import { Add, Explore } from '@mui/icons-material';
import { Stack, SxProps, Typography } from '@mui/material';

import { ServersOptions } from './ServersOptions';
import { ListLayout } from './channelsLayout/ListLayout';

export interface ServerMenuI {
  name: string;
  img?: string;
  icon?: JSX.Element;
  // action: () => void;
}

export async function ServersMenu() {
  const getRandomImg = async (id: number) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`).then((res) =>
      res.json().then((res) => res.url)
    );

    return String(res);
  };

  const serverMenu: ServerMenuI[] = [
    {
      name: 'Server 1',
      img: await getRandomImg(1),
      // action: () => {},
    },
    {
      name: 'Server 2',
      img: await getRandomImg(2),
      // action: () => {},
    },
    {
      name: 'Server 3',
      img: await getRandomImg(3),
      // action: () => {},
    },
    {
      name: 'Server 4',
      img: await getRandomImg(4),
      // action: () => {},
    },
    {
      name: 'Server 5',
      img: await getRandomImg(5),
      // action: () => {},
    },
    {
      name: 'Server 6',
      img: await getRandomImg(6),
      // action: () => {},
    },
  ];

  const serverOptions: ServerMenuI[] = [
    {
      name: 'Add new Server',
      icon: <Add className={'icon'} color='success' />,
      // action: () => {},
    },
    {
      name: 'Explore other servers',
      icon: <Explore className={'icon'} color='success' />,
      // action: () => {},
    },
  ];

  return (
    <>
      <Stack sx={styled}>
        <Typography textAlign={'center'} fontWeight={'bold'} fontSize={['.8em', '.9em']}>
          Discord
        </Typography>

        <ServersOptions serverMenu={serverMenu} serverOptions={serverOptions} />
        <ListLayout />
      </Stack>
    </>
  );
}

const styled: SxProps = {
  maxWidth: '5rem',
  bgcolor: 'rgb(43, 45, 49)',
  rowGap: 1,
  minHeight: '100vh',
  py: '1rem',
};
