import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsClapperboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,1H3.5C1.57,1,0,2.57,0,4.5v18.5h24V4.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,3.5v2.5h-4.379l3-3h.879c.276,0,.5.224.5.5Zm-12.379,2.5l3-3h3.758l-3,3h-3.758Zm-5.121-3h3.879l-3,3h-1.379v-2.5c0-.276.224-.5.5-.5Zm-.5,16v-10h18v10H3Z"/>
</svg>

);
