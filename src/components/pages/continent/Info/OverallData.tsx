import { Flex, Text } from '@chakra-ui/react';
import { AdditionalInfo } from './AdditionalInfo';

interface OverallDataProps {
  title: string;
  data: string;
  additionalInfo?: {
    info: string;
    ariaLabel: string;
  };
}

export function OverallData({ title, data, additionalInfo }: OverallDataProps) {
  return (
    <Flex direction="column" align={['flex-start', 'center', 'center']} justify="center">
      <Text color="yellow.500" fontWeight="semibold" fontSize={['2xl', '5xl']}>
        {data}
      </Text>
      <Flex align="center">
        <Text
          fontWeight={['regular', 'semibold']}
          color="gray.900"
          fontSize={['lg', 'lg', '2xl']}
          mr="5px"
        >
          {title}
        </Text>
        {!!additionalInfo && (
          <AdditionalInfo
            additionalInfo={additionalInfo.info}
            ariaLabel={additionalInfo.ariaLabel}
          />
        )}
      </Flex>
    </Flex>
  );
}
