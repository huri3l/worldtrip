export interface Banner {
  title: string;
  description: string;
  images: {
    background: {
      url: string;
      alt: string;
    };
    airplane: {
      url: string;
      alt: string;
    };
  };
}

export interface Category {
  title: string;
  image: {
    url: string;
    alt: string;
  };
}

export interface Guide {
  title: string;
  subtitle: string;
}

export interface Continent {
  slug: string;
  name: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
}

type Home = {
  banner: Banner;
  categories: Category[];
  guide: Guide;
  continents: Continent[];
};
