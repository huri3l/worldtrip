import { Flex, Image, Link, Box } from '@chakra-ui/react';
import { usePathVerification } from '../../../hooks/usePathVerification';
import { Return } from '../../../icons/Return';

export function Header() {
  const { isHome } = usePathVerification();

  console.log(isHome);

  return (
    <Flex as="header" h={100} align="center" justify="space-around">
      {!isHome && (
        <Box ml="6vw">
          <Link href="/" aria-label="Voltar para a página principal">
            <Return />
          </Link>
        </Box>
      )}
      <Image src="/assets/logo.svg" alt="Logo da Worldtrip" maxW={184} w="100%" mx="auto" />
    </Flex>
  );
}
