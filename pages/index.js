import { createStyles, TextInput, Paper, Container, Grid, Button } from '@mantine/core';

import { IconSearch } from '@tabler/icons-react';

import { VacancyPaper } from '../components/vacancy';

const useStyles = createStyles((theme) => ({
  root: {
    padding: `calc(${theme.spacing.xl} * 1.5)`,
    height: '100%'
  },
}));

export default function Home() {
  const { classes } = useStyles();

  const data = [
    {
      title: "Менеджер",
      salary: "ЗП",
      period: "полный день",
      location: "Уганда"
    }, {
      title: "Менеджер",
      salary: "ЗП",
      period: "",
      location: "Уганда"
    }, {
      title: "Менеджер",
      salary: "ЗП",
      period: "",
      location: "Уганда"
    }
  ];

  return (
    <main className={classes.root}>
      <Container my="md">
        <Grid gutter={30}>
          <Grid.Col span={4}>
            <Paper withBorder p="md" radius="md">

              <div class="mb-3">
                <div class="form-label">Отрасль</div>
                <select type="text" class="form-select tomselected ts-hidden-accessible"
                  placeholder="выбирите отрасль" id="select-tags" value multiple="multiple" tabindex="-1">
                  <option value="1">отрасль1</option>
                  <option value="2">отрасль2</option>
                  <option value="3">отрасль3</option>
                </select>
              </div>

            </Paper>
          </Grid.Col>

          <Grid.Col span={8}>
            <Grid>
              <Grid.Col span={12}>

                <TextInput
                  placeholder="Введите название вакансии"
                  size="xs"
                  icon={<IconSearch size="0.8rem" stroke={1.5} />}
                  rightSectionWidth={90}
                  rightSection={<Button size="xs">
                    Батон
                  </Button>}
                  styles={{ rightSection: { pointerEvents: 'none' } }}
                  mb="sm"
                />

              </Grid.Col>
              {data.map((vacancy) => {
                return (
                  <Grid.Col span={12}>
                    <VacancyPaper title={vacancy.title} salary={vacancy.salary} period={vacancy.period} location={vacancy.location} />
                  </Grid.Col>
                )
              })}
            </Grid>

          </Grid.Col>
        </Grid>
      </Container>
    </main>
  )
}
