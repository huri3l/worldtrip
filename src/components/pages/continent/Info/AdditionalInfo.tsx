import { Tooltip, Box } from '@chakra-ui/react';
import { useState } from 'react';
import { Info } from '../../../../icons/Info';

interface AdditionalInfoProps {
  additionalInfo: string;
  ariaLabel: string;
}

export function AdditionalInfo({ additionalInfo, ariaLabel }: AdditionalInfoProps) {
  const [isLabelOpen, setIsLabelOpen] = useState(false);

  return (
    <Tooltip
      isOpen={isLabelOpen}
      bg="gray.900"
      color="gray.100"
      hasArrow
      label={additionalInfo}
      aria-label={ariaLabel}
    >
      <Box
        onMouseEnter={() => setIsLabelOpen(true)}
        onMouseLeave={() => setIsLabelOpen(false)}
        onClick={() => setIsLabelOpen(true)}
      >
        <Info />
      </Box>
    </Tooltip>
  );
}
