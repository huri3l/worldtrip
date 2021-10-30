import { Icon, IconProps } from '@chakra-ui/react';

export function Return({ width = 8, height = 8, ...rest }: IconProps) {
  return (
    <Icon width={width} height={height} viewBox="0 0 32 32" {...rest}>
      <path
        d="M20 24L12 16L20 8"
        stroke="#47585B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="transparent"
      />
    </Icon>
  );
}
