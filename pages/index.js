import { createStyles, TextInput, Paper, Container, Grid, Button, NumberInput, MultiSelect, Text, Title, Pagination, } from '@mantine/core';

import { IconSearch, IconX } from '@tabler/icons-react';

import { VacancyPaper } from '../components/vacancy';

const useStyles = createStyles((theme) => ({
  root: {
    padding: `calc(${theme.spacing.xl} * 1.5)`,
    height: '100%'
  },
  mb: {
    marginBottom: '0.5rem'
  }
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

              <Title order={4}>Фильтры</Title>

              <Text fz="sm" c="dimmed">Сбросить все</Text>
              <IconX size="0.9rem" stroke={1.5} />


              <MultiSelect
                data={['Машиностроение', 'Жопочесание', 'ИТ']}
                label="Отрасль"
                placeholder="Выберите отрасль"
                searchable
                nothingFound="Nothing found"
              />
              <Text>Оклад</Text>
              <NumberInput className={classes.mb}
                placeholder="От"

              />
              <NumberInput className={classes.mb}
                placeholder="До"
              />
              <Button radius="md" fullWidth variant="outline">
                Применить
              </Button>
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
                  rightSection={<Button size="xs" compact>
                    Поиск
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
            <Pagination total={10} />
          </Grid.Col>
        </Grid>
      </Container>
    </main>
  )
}
