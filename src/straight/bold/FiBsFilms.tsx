import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFilms = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,0h-12c-1.93,0-3.5,1.57-3.5,3.5v14.5h19V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,3.5v1.5h-2v-2h1.5c.276,0,.5.225.5.5Zm-11,6.5h-2v-2h2v2Zm3-7h3v12h-3V3Zm6,5h2v2h-2v-2ZM8.5,3h1.5v2h-2v-1.5c0-.275.224-.5.5-.5Zm-.5,10h2v2h-2v-2Zm11,2v-2h2v2h-2ZM3,20h16v3H0V6h3v14Z"/>
</svg>

);
