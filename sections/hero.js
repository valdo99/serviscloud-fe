import React from 'react';
import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  useMantineTheme,
} from '@mantine/core';
import { Dots } from '../visual_utils/Dots';

const useStyles = createStyles((theme) => ({
  container: {
    background: theme.colors.primary[0],
    paddingTop: 30,
    paddingBottom: 30,
  },
  wrapper: {
    position: 'relative',
    paddingTop: 120,
    paddingBottom: 80,

    '@media (max-width: 755px)': {
      paddingTop: 80,
      paddingBottom: 60,
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  dots: {
    position: 'absolute',
    color: theme.colors.primary[4],
    '@media (max-width: 755px)': {
      display: 'none',
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    textAlign: 'center',
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    '@media (max-width: 520px)': {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  description: {
    textAlign: 'center',

    '@media (max-width: 520px)': {
      textAlign: 'left',
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: 'flex',
    justifyContent: 'center',

    '@media (max-width: 520px)': {
      flexDirection: 'column',
    },
  },

  control: {
    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    '@media (max-width: 520px)': {
      height: 42,
      fontSize: theme.fontSizes.md,

      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));

export default function HeroFirst() {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <div className={classes.container}>
      <Container className={classes.wrapper} size={1400}>
        <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
        <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

        <div className={classes.inner}>
          <Title className={classes.title}>
            Automated AI{' '}
            <Text component="span" color={theme.primaryColor} inherit>
              code reviews
            </Text>{' '}
            for any stack
          </Title>

          <Container p={0} size={600}>
            <Text size="lg" color="dimmed" className={classes.description}>
              Build more reliable software with AI companion. AI is also trained
              to detect lazy developers who do nothing and just complain on
              Twitter.
            </Text>
          </Container>

          <div className={classes.controls}>
            <Button
              className={classes.control}
              size="lg"
              variant="default"
              color="gray"
            >
              Book a demo
            </Button>
            <Button className={classes.control} size="lg">
              Purchase a license
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
