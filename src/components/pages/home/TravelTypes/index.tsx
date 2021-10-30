import { Flex, useBreakpointValue } from '@chakra-ui/react';
import { TravelType } from './TravelType';
import { Category } from '../../types/home';

interface TravelTypesProps {
  travelTypes: Category[];
}

export function TravelTypes({ travelTypes }: TravelTypesProps) {
  const isMobile = !useBreakpointValue({
    base: false,
    sm: true,
    md: true,
    lg: true,
  });

  return (
    <Flex
      justify={['space-around', 'space-around', 'space-between', 'space-between']}
      align="center"
      w="100%"
      maxW="1160px"
      alignSelf="center"
      px={[4, 4, 6]}
      flexFlow="row wrap"
    >
      {travelTypes.map((travelType) => (
        <TravelType
          key={travelType.title}
          title={travelType.title}
          icon={travelType.image.url}
          alt={travelType.image.alt}
          isMobile={isMobile}
        />
      ))}
    </Flex>
  );
}
