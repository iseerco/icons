import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsGraphicTablet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M21.5,4H2v7.5H0v1H2v7.5H21.5c1.378,0,2.5-1.121,2.5-2.5V6.5c0-1.378-1.122-2.5-2.5-2.5ZM7,19H3v-6.5h2v-1H3V5H7v14Zm16-1.5c0,.827-.673,1.5-1.5,1.5H8V5h13.5c.827,0,1.5,.673,1.5,1.5v11Z"/>
</svg>

);
