import { createStyles, Paper, Input, Container, Grid, Group, Text } from '@mantine/core';

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
      <Container my="md">
        <Grid gutter={30}>
          <Grid.Col span={4}>
            <Paper withBorder p="md" radius="md"/>
          </Grid.Col>
          
          <Grid.Col span={8}>
            <Grid>
              <Grid.Col span={12}>
                <Input placeholder="Поіск"/>
              </Grid.Col>
              <Grid.Col span={12}>
                <Paper withBorder p="md" radius="md">
                  <div>
                    <Text c="blue" fz="xl">title</Text>
                    <Text>salary</Text>
                    <Text>salary info</Text>
                    <Text>location</Text>
                  </div>
                </Paper>
              </Grid.Col>
              <Grid.Col span={12}>
              <Paper withBorder p="md" radius="md"/>
              </Grid.Col>
            </Grid>
            
          </Grid.Col>
        </Grid>
      </Container>
    </main>
  )
}
