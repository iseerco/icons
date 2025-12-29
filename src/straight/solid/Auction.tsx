import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Auction = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,22v2h-15v-2h1.051c.232-1.14,1.242-2,2.449-2h8c1.208,0,2.217.86,2.449,2h1.051ZM14.487,1.442L13.074.029l-7.89,7.89,1.413,1.413L14.487,1.442Zm-1.227,12.503l5.871-5.871-4.224-4.224-5.871,5.871,1.414,1.414L.023,21.562l1.414,1.414,10.427-10.427,1.396,1.396Zm1.834,3.884l7.889-7.89-1.414-1.414-7.889,7.89,1.414,1.414Z"/>
</svg>

);
