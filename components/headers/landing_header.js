import React from 'react';
import {
  createStyles,
  Menu,
  Center,
  Header,
  Container,
  Group,
  Button,
  Burger,
} from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import { ChevronDown } from 'tabler-icons-react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../visual_utils/Logo';

const HEADER_HEIGHT = 80;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: `0px ${theme.spacing.xl * 6}px`,
    [theme.fn.smallerThan('sm')]: {
      margin: `0px ${theme.spacing.sm * 3}px`,
    },
    [theme.fn.smallerThan('md')]: {
      margin: `0px ${theme.spacing.sm * 2}px`,
    },
  },
  header: {
    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'space-between',
      width: '100%',
    },
  },
  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  cta: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      cursor: 'pointer',
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

// interface HeaderActionProps {
//   links: {
//     link: string,
//     label: string,
//     links: { link: string, label: string }[],
//   }[];
// }

export default function LandingHeader({ links }) {
  const { classes } = useStyles();
  const [opened, toggleOpened] = useBooleanToggle(false);
  const items = links.map((link) => {
    return (
      <Link key={link.link} href={link.link}>
        <span className={classes.link}>{link.label}</span>
      </Link>
    );
  });

  return (
    <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }}>
      <Container className={classes.inner} fluid>
        <Group className={classes.header}>
          <Logo style={{ height: '60px' }} />

          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size="sm"
          />
        </Group>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Button className={classes.cta}>Get early access</Button>
      </Container>
    </Header>
  );
}
