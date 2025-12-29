import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLeader = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m9,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm13,18.5v3H2v-3h6v-10h3v3h3v-4.5c0-.276-.225-.5-.5-.5h-5.587L.982,2.602,3.018.398l6.069,5.602h4.413c1.93,0,3.5,1.57,3.5,3.5v7.5h-2v4h7Zm-11,0h1v-4h-1v4Z"/>
</svg>

);
