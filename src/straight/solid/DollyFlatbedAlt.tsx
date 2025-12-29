import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DollyFlatbedAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m7,16h17v-7H7v7ZM14,0h-7v7h7V0Zm2,2v5h8V2h-8Zm8,18h-1v1c0,1.654-1.346,3-3,3s-3-1.346-3-3v-1h-5v1c0,1.654-1.346,3-3,3s-3-1.346-3-3v-1c-1.654,0-3-1.346-3-3V3c0-.552-.449-1-1-1H0V0h2c1.654,0,3,1.346,3,3v14c0,.552.449,1,1,1h18v2Z"/>
</svg>

);
