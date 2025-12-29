import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrDollyFlatbedEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.5,18.013h-14c-1.378,0-2.5-1.121-2.5-2.5V4.513C6,2.031,3.981.013,1.5.013.671.013,0,.685,0,1.513s.671,1.5,1.5,1.5,1.5.673,1.5,1.5v11c0,2.133,1.221,3.986,3,4.898v1.102c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5v-.5h5v.5c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5v-.5h1.5c.829,0,1.5-.672,1.5-1.5s-.671-1.5-1.5-1.5Z"/>
</svg>

);
