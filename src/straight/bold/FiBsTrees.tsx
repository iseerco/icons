import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTrees = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24.103,22l-3.477-6h2.444l-3.957-6h2.1L16.001,1.184c-.592-.752-1.503-1.184-2.501-1.184-.765,0-1.479.254-2.037.711-.525-.453-1.202-.711-1.91-.711-.956,0-1.854.469-2.4,1.253L2.579,10h1.862l-3.5,6h2.157L.023,22h7.977v2h3v-2h1v2h3v-2h9.103ZM13.619,3.023l2.344,3.977h-2.422l3.957,6h-2.077l3.477,6h-10.794l3.477-6h-2.078l3.958-6h-2.423l2.344-3.977c.049-.021.189-.021.238,0Z"/>
</svg>

);
