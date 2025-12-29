import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalendarStar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m0,24h24v-13H0v13Zm7.438-8.504h3.102l.889-3.101h1.167l.944,3.101h3.086l.226.835-2.407,1.783.917,2.819-.883.603-2.438-1.653-2.459,1.666-.818-.632.87-2.833-2.359-1.714.162-.873ZM24,5v4H0v-4c0-1.654,1.346-3,3-3h3V0h2v2h8V0h2v2h3c1.654,0,3,1.346,3,3Z"/></svg>

);
