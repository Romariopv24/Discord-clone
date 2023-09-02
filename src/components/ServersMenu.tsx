import { Add, Explore } from '@mui/icons-material';
import { Box, Fade, Stack, SxProps, Tooltip, TooltipProps, Typography } from '@mui/material';
import Image from 'next/image';

interface ServerMenuI {
  name: string;
  img: string;
  action: () => void;
}

interface ServerOptionsI {
  name: string;
  icon: JSX.Element;
  action: () => void;
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
      action: () => {},
    },
    {
      name: 'Server 2',
      img: await getRandomImg(2),
      action: () => {},
    },
    {
      name: 'Server 3',
      img: await getRandomImg(3),
      action: () => {},
    },
    {
      name: 'Server 4',
      img: await getRandomImg(4),
      action: () => {},
    },
    {
      name: 'Server 5',
      img: await getRandomImg(5),
      action: () => {},
    },
    {
      name: 'Server 6',
      img: await getRandomImg(6),
      action: () => {},
    },
  ];

  const serverOptions: ServerOptionsI[] = [
    {
      name: 'Add new Server',
      icon: <Add className={'icon'} color='success' />,
      action: () => {},
    },
    {
      name: 'Explore other servers',
      icon: <Explore className={'icon'} color='success' />,
      action: () => {},
    },
  ];

  return (
    <>
      <Stack sx={styled}>
        <Typography textAlign={'center'} fontWeight={'bold'} fontSize={['.8em', '.9em']}>
          Discord
        </Typography>
        <Tooltip {...toolTipProps} title={'Direct Messages'}>
          <Box sx={boxStyledWithImage}>
            <Stack my={'5px'} alignItems={'center'}>
              <Image
                src={
                  'https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6cc3c481a15a141738_icon_clyde_white_RGB.png'
                }
                alt='dicord-logo'
                width={25}
                height={22}
                style={{ backgroundSize: 'contain' }}
              />
            </Stack>
          </Box>
        </Tooltip>
        {serverMenu.map((server, idx: number) => (
          <Tooltip key={idx} {...toolTipProps} title={server.name}>
            <Box mx={'auto'}>
              <Image
                src={server.img}
                alt='server-img'
                width={50}
                height={50}
                style={{ borderRadius: 18 }}
              />
            </Box>
          </Tooltip>
        ))}
        {serverOptions.map((options, idx: number) => (
          <Tooltip key={idx} {...toolTipProps} title={options.name}>
            <Box sx={boxStyled}>
              <Stack my={'4px'} alignItems={'center'}>
                {options.icon}
              </Stack>
            </Box>
          </Tooltip>
        ))}
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

const boxStyled: SxProps = {
  bgcolor: 'rgb(49, 51, 56)',
  padding: '.5rem',
  borderRadius: '100%',
  height: '50px',
  width: '50px',
  mx: 'auto',
  transition: 'color .3s ease-out, background-color .3s ease-out',
  ':hover': {
    bgcolor: 'rgb(35, 165, 89)',
    borderRadius: '18px',
  },
  ':hover .icon': {
    color: 'white',
  },
};

const boxStyledWithImage: SxProps = {
  ...boxStyled,
  ':hover': {
    bgcolor: 'rgb(106, 90, 205)',
    borderRadius: '18px',
  },
};

const toolTipProps: TooltipProps = {
  TransitionComponent: Fade,
  TransitionProps: { timeout: 600 },
  arrow: true,
  placement: 'right',
  children: <></>,
  title: undefined,
  componentsProps: {
    tooltip: {
      sx: {
        bgcolor: 'black',
        '& .MuiTooltip-arrow': {
          color: 'black',
        },
      },
    },
  },
};
