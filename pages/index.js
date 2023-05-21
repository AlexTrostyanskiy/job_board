import Image from 'next/image'
import { createStyles, Group, Paper, SimpleGrid, Text, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    padding: `calc(${theme.spacing.xl} * 1.5)`,
    height: '100%'
  },
}));

export default function Home() {
  const { classes } = useStyles();

  return (
    <main className={classes.root}>
      <SimpleGrid cols={1}>
      <Paper withBorder p="md" radius="md">
        
      </Paper>
      </SimpleGrid>
    </main>
  )
}
