import { createStyles, TextInput, Paper, Code, Input, Container, Grid, Group, Text } from '@mantine/core';

import { IconSearch, IconStar } from '@tabler/icons-react';

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

              <TextInput
        placeholder="Введите название вакансии"
        size="xs"
        icon={<IconSearch size="0.8rem" stroke={1.5} />}
        rightSectionWidth={150}
        rightSection={<Code className={classes.searchCode}>не кнопка</Code>}
        styles={{ rightSection: { pointerEvents: 'none' } }}
        mb="sm"
      />

              </Grid.Col>
              <Grid.Col span={12}>
                <Paper withBorder p="md" radius="md">
                  <div>
                    <Text c="blue" fz="xl">Менеджер</Text>
                    <Text fw={700}>salary</Text>
                    <Text>salary info</Text>
                    <Text>location</Text>
                  </div>
                </Paper>
              </Grid.Col>
              <Grid.Col span={12}>
              <Paper withBorder p="md" radius="md">
              <div>
                    <Text c="blue" fz="xl">Менеджер</Text>
                    <Text>salary</Text>
                    <Text>salary info</Text>
                    <Text>location</Text>
                  </div>
                  </Paper>
              </Grid.Col>
            </Grid>
            
          </Grid.Col>
        </Grid>
      </Container>
    </main>
  )
}
