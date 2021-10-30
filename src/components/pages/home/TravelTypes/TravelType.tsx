import { Flex, Image, Text } from '@chakra-ui/react';
import { Circle } from '../../../../icons/Circle';

interface TravelTypeProps {
  icon: string;
  title: string;
  alt: string;
  isMobile: boolean;
}

export function TravelType({ icon, title, alt, isMobile }: TravelTypeProps) {
  return (
    <Flex direction={['row', 'column']} align="center" justify="center" m={[3, 2, 0, 0]}>
      {isMobile ? (
        <Circle color="yellow.500" mr={2} />
      ) : (
        <Image src={icon} width={['42px', '42px', '85px']} mb={[4, 4, 6]} alt={alt} />
      )}
      <Text fontWeight={['medium', 'semibold']} color="gray.900" fontSize={['lg', 'lg', '2xl']}>
        {title}
      </Text>
    </Flex>
  );
}
