'use client';

import { Box, Fade, Stack, SxProps, Tooltip, TooltipProps } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ServerMenuI } from './ServersMenu';

interface Props {
  serverMenu: ServerMenuI[];
  serverOptions: ServerMenuI[];
}

export function ServersOptions({ serverMenu, serverOptions }: Props) {
  const pathname = usePathname();

  return (
    <>
      <Box
        sx={
          pathname === '/channels'
            ? { borderLeft: 'white solid 5px' }
            : { ':hover': { borderLeft: 'white solid 5px' } }
        }
      >
        <Link href={'channels'}>
          <Tooltip {...toolTipProps} title={'Direct Messages'}>
            <Box
              sx={
                pathname === '/channels'
                  ? { ...boxStyledWithImage, bgcolor: 'rgb(106, 90, 205)' }
                  : boxStyledWithImage
              }
            >
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
        </Link>
      </Box>
      {serverMenu.map((server, idx: number) => (
        <Tooltip key={idx} {...toolTipProps} title={server.name}>
          <Box mx={'auto'}>
            <Image
              src={server.img!}
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
    </>
  );
}

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
