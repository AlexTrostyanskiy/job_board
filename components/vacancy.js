import { createStyles, Paper, Group, Text, Space } from '@mantine/core';

import { IconMapPin, IconPointFilled, IconStar } from '@tabler/icons-react';


const useStyles = createStyles((theme) => ({
    starIcon: {
        alignSelf: "flex-start",
        color: "#ACADB9"
    }
}));

function Period({ period }) {
    if (period) {
        return (
            <>
                <Text>
                    <IconPointFilled size="0.7rem" stroke={1.5} />
                </Text>
                <Space w="xs" />
                <Text>{period}</Text>
            </>
        );
    } else {
        return null;
    }
}

export function VacancyPaper({ title, salary, period, location }) {
    const { classes } = useStyles();

    return (
        <Paper withBorder p="md" radius="md">
            <Group position="apart">
                <div>
                    <Text c="blue" fz="xl">{title}</Text>
                    <div style={{ display: 'flex' }}>
                        <Text fw={700}>{salary}</Text>
                        <Space w="xs" />
                        <Period period={period} />
                    </div>
                    <Text><IconMapPin size="0.9rem" stroke={1.5} />{location}</Text>
                </div>

                <IconStar className={classes.starIcon} size="1.2rem" stroke={1.5} />
            </Group>
        </Paper>
    );
}