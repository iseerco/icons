import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TrashSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.855,23c-.551.612-1.341,1-2.222,1H7.329c-1.531,0-2.813-1.147-2.982-2.669l-1.604-14.444,16.113,16.113Zm5.102-.457l-1.414,1.414L.043,1.457,1.457.043l3.957,3.957h1.586v-2c0-1.103.897-2,2-2h6c1.103,0,2,.897,2,2v2h6v2h-1.682l-1.39,12.513,4.03,4.03ZM9,4h6v-2h-6v2Z"/>
</svg>

);
