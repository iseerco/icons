import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBanner3 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24-.077L1.154,1.065.022,10.981l-.022.019,12,7v-6.464l12,.532V-.077Zm-3,9.009l-17.635-.782.481-4.215,17.154-.858v5.855Zm-15.522,11.677l4.522,3.391-8-2v-4l1.689-2.533,5.957,3.475-4.167,1.667Z"/>
</svg>

);
