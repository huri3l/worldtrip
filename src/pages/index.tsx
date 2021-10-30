import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Stack, Divider, Box, Heading } from '@chakra-ui/react';
import { Header } from '../components/commons/Header';
import { Banner } from '../components/pages/home/Banner';
import { TravelTypes } from '../components/pages/home/TravelTypes';
import { ContinentSlider } from '../components/pages/home/ContinentSlider';

import { getPrismicClient } from '../services/prismic';
import { Home as HomeType } from '../types/home';

interface HomeProps {
  home: HomeType;
}

export default function Home({ home }: HomeProps) {
  return (
    <>
      <Head>
        <title>Worldtrip</title>
      </Head>
      <Header />

      <Stack spacing="80px" mb="52px">
        <Banner banner={home.banner} />
        <TravelTypes travelTypes={home.categories} />
      </Stack>

      <Divider width={['60px', '90px']} border={'1px'} mx="auto" borderColor="gray.900" />
      <ContinentSlider guide={home.guide} continents={home.continents} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.getSingle('home', {});

  const home = {
    banner: {
      title: response.data.banner_title[0].text,
      description: response.data.banner_description,
      images: {
        background: {
          url: response.data.banner_image.url,
          alt: response.data.banner_image.alt,
        },
        airplane: {
          url: response.data.banner_airplane.url,
          alt: response.data.banner_airplane.alt,
        },
      },
    },
    categories: response.data.categories.map((category) => ({
      title: category.category_title[0].text,
      image: {
        url: category.category_image.url,
        alt: category.category_image.alt,
      },
    })),
    guide: {
      title: response.data.continents_guide[0].text,
      subtitle: response.data.continents_guide[1].text,
    },
    continents: response.data.continents.map((continent) => ({
      slug: continent.continent_slug,
      name: continent.continent_name[0].text,
      description: continent.continent_description,
      image: {
        url: continent.continent_image.url,
        alt: continent.continent_image.alt,
      },
    })),
  };

  return {
    props: {
      home,
    },
  };
};
