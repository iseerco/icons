import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsRoadBarrier = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M21,2v2H3V2H0V22H3v-6H21v6h3V2h-3Zm-3.879,5h2.758l-6,6h-2.758l6-6ZM6.879,13h-2.758l6-6h2.758l-6,6Zm-1-6l-2.879,2.879v-2.879h2.879Zm12.242,6l2.879-2.879v2.879h-2.879Z"/>
</svg>

);
