import { Flex, Text, Stack } from '@chakra-ui/react';
import { OverallData } from './OverallData';

export function Info() {
  return (
    <Flex
      direction={['column', 'column', 'column', 'column', 'row']}
      justify="space-between"
      align={['flex-start', 'center']}
    >
      <Text
        width={['100%', '100%', '100%', '100%', '50%']}
        textAlign="justify"
        fontSize={['sm', 'lg', 'xl', '2xl']}
        mb={[4, 6, 8, 10, 0]}
      >
        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península
        ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas
        dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>

      <Stack direction="row" spacing={['5%', '10%', '42px']} justify="center" w="100%">
        <OverallData title="países" data="50" />
        <OverallData title="línguas" data="60" />
        <OverallData
          title="cidades +100"
          data="27"
          additionalInfo={{
            info: 'Cidades que estão no rank das 100 melhores cidades do mundo.',
            ariaLabel: "Descrição do que significa 'cidades +100'",
          }}
        />
      </Stack>
    </Flex>
  );
}
