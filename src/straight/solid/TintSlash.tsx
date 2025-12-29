import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TintSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.563,19.149c2.35-3.902,1.76-8.967-1.5-12.228L12,.014l-5.345,5.227L1.457.043.043,1.457l22.5,22.5,1.414-1.414-3.394-3.394Zm-2.71,2.947c-1.695,1.23-3.72,1.904-5.854,1.904-2.671,0-5.182-1.04-7.071-2.929-3.517-3.517-3.851-9.017-1.024-12.924l13.949,13.948Z"/>
</svg>

);
