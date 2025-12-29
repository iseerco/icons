import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PeopleDress = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M3.5,2.5c0-1.38,1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5-1.12,2.5-2.5,2.5-2.5-1.12-2.5-2.5Zm7.63,17.5h-2.13v4h-2v-4h-2v4H3v-4H.87l1.42-11.37c.19-1.5,1.47-2.63,2.98-2.63h1.47c1.51,0,2.79,1.13,2.98,2.63l1.42,11.37Zm6.87-15c1.38,0,2.5-1.12,2.5-2.5s-1.12-2.5-2.5-2.5-2.5,1.12-2.5,2.5,1.12,2.5,2.5,2.5Zm3,15v4h-2v-4h-2v4h-2v-4h-2.13l1.42-11.37c.19-1.5,1.47-2.63,2.98-2.63h1.47c1.51,0,2.79,1.13,2.98,2.63l1.42,11.37h-2.13Z"/></svg>

);
