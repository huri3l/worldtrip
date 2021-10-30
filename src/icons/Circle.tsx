import { Icon, IconProps } from '@chakra-ui/react';

export function Circle({ color, width = 2, height = 2, ...rest }: IconProps) {
  return (
    <Icon width={width} height={height} viewBox="0 0 8 8" color={color} {...rest}>
      <circle cx="4" cy="4" r="4" fill="currentColor" />
    </Icon>
  );
}
