import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFlag = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m15,4v-1.5c0-1.378-1.122-2.5-2.5-2.5H0v24h1v-11h10v1.5c0,1.378,1.122,2.5,2.5,2.5h10.5V4h-9ZM1,1h11.5c.827,0,1.5.673,1.5,1.5v9.5H1V1Zm22,15h-9.5c-.827,0-1.5-.673-1.5-1.5v-1.5h3V5h8v11Z"/>
</svg>

);
