import { Box, Heading, Stack } from '@chakra-ui/react';
import { Continent as ContinentType, Guide as GuideType } from '../../../../types/home';
import { Slider } from './Slider';

interface ContinentSliderProps {
  guide: GuideType;
  continents: ContinentType[];
}

export function ContinentSlider({ guide, continents }: ContinentSliderProps) {
  return (
    <Stack spacing="52px" mt="52px" mb="30px" display="flex" justify="center" align="center">
      <Box>
        <Heading
          color="gray.900"
          fontWeight="medium"
          fontSize={[20, 30, 36]}
          lineHeight={['30px', '40px', '54px']}
          textAlign="center"
        >
          {guide.title}
          <br />
          {guide.subtitle}
        </Heading>
      </Box>
      <Slider slides={continents} />
    </Stack>
  );
}
