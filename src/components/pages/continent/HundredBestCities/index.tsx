import { Heading, Stack, Flex, SimpleGrid, Wrap } from '@chakra-ui/layout';
import { CityCard } from './CityCard';

export function HundredBestCities() {
  return (
    <Stack spacing="40px">
      <Heading fontWeight="medium" color="gray.900">
        Cidades +100
      </Heading>
      <Wrap spacing="45px" justify={['center', 'center', 'center', 'center', 'flex-start']}>
        <CityCard
          name="Londres"
          image="/assets/london.jpg"
          country={{
            name: 'Reino Unido',
            flag: { url: 'https://flagcdn.com/w160/gb.png', alt: 'Bandeira do Reino Unido' },
          }}
        />
        <CityCard
          name="Londres"
          image="/assets/london.jpg"
          country={{
            name: 'Reino Unido',
            flag: { url: 'https://flagcdn.com/w160/gb.png', alt: 'Bandeira do Reino Unido' },
          }}
        />
        <CityCard
          name="Londres"
          image="/assets/london.jpg"
          country={{
            name: 'Reino Unido',
            flag: { url: 'https://flagcdn.com/w160/gb.png', alt: 'Bandeira do Reino Unido' },
          }}
        />
        <CityCard
          name="Londres"
          image="/assets/london.jpg"
          country={{
            name: 'Reino Unido',
            flag: { url: 'https://flagcdn.com/w160/gb.png', alt: 'Bandeira do Reino Unido' },
          }}
        />
        <CityCard
          name="Londres"
          image="/assets/london.jpg"
          country={{
            name: 'Reino Unido',
            flag: { url: 'https://flagcdn.com/w160/gb.png', alt: 'Bandeira do Reino Unido' },
          }}
        />
        <CityCard
          name="Londres"
          image="/assets/london.jpg"
          country={{
            name: 'Reino Unido',
            flag: { url: 'https://flagcdn.com/w160/gb.png', alt: 'Bandeira do Reino Unido' },
          }}
        />
      </Wrap>
    </Stack>
  );
}
