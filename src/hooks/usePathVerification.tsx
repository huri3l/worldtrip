import { useRouter } from 'next/router';

type usePathVerificationType = {
  isHome: boolean;
};

export function usePathVerification(): usePathVerificationType {
  const { asPath } = useRouter();

  const isHome = asPath === '/';

  return { isHome };
}
