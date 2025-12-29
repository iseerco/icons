import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PersonRays = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M9.5,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm7.5,6.5v8h-2v7h-2v-7h-2v7h-2v-7h-2V9c0-1.654,1.346-3,3-3h4c1.654,0,3,1.346,3,3Zm-2,0c0-.551-.448-1-1-1h-4c-.551,0-1,.449-1,1v6h6v-6ZM-.007,22.593l1.414,1.414,4.7-4.7-1.414-1.414L-.007,22.593ZM24.007,1.407L22.593-.007l-4.7,4.7,1.414,1.414L24.007,1.407Zm-6.114,17.899l4.7,4.7,1.414-1.414-4.7-4.7-1.414,1.414ZM-.007,1.407L4.693,6.107l1.414-1.414L1.407-.007-.007,1.407Z"/>
</svg>

);
