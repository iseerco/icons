import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBedEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.5,12H1V2H0v20h1v-3h22v3h1v-7.5c0-1.378-1.121-2.5-2.5-2.5ZM1,18v-5h20.5c.827,0,1.5.673,1.5,1.5v3.5H1Z"/>
</svg>

);
