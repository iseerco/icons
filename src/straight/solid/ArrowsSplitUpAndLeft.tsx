import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowsSplitUpAndLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M15,22c-.551,0-1-.449-1-1V2.949l3.796,3.761,1.407-1.421L14.486,.616c-.82-.82-2.153-.819-2.969-.003L6.796,5.29l1.407,1.421,3.796-3.761V12H2.949l3.761-3.796-1.421-1.407L.616,11.514c-.82,.819-.82,2.153-.003,2.969l4.677,4.721,1.421-1.407-3.761-3.796H12v7c0,1.654,1.346,3,3,3h9v-2H15Z"/>
</svg>

);
