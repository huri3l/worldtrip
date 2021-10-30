import Head from 'next/head';
import { Stack } from '@chakra-ui/react';
import { Banner } from '../../components/pages/continent/Banner';
import { Header } from '../../components/commons/Header';
import { Info } from '../../components/pages/continent/Info';
import { HundredBestCities } from '../../components/pages/continent/HundredBestCities';

export default function Continent() {
  return (
    <>
      <Head>
        <title>Worldtrip</title>
      </Head>
      <Header />

      <Banner />
      <Stack
        spacing="80px"
        mx={['16px', '48px', '82px', '140px']}
        mt={['24px', '48px', '80px']}
        mb="35px"
      >
        <Info />
        <HundredBestCities />
      </Stack>
    </>
  );
}
