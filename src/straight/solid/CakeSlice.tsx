import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CakeSlice = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.993,12H0L10.192.881c.847-.565,1.831-.87,2.844-.881,1.113.005,2.191.332,3.081.996,3.906,2.919,6.171,6.448,7.174,8.292.446.819.683,1.755.702,2.711ZM0,24h24v-4H0v4Zm0-10v4h24v-4H0Z"/>
</svg>

);
