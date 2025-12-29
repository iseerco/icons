import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalendarStar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,2.026h-3V.026h-2v2h-8V.026h-2v2h-3c-1.654,0-3,1.346-3,3v19h24V5.026c0-1.654-1.346-3-3-3ZM3,4.026h18c.551,0,1,.449,1,1v3H2v-3c0-.551.449-1,1-1Zm-1,18v-12h20v12H2Zm14.82-6.669l-2.407,1.783.917,2.819-.883.603-2.438-1.653-2.459,1.666-.818-.632.87-2.833-2.359-1.714.162-.873h3.102l.889-3.101h1.167l.944,3.101h3.086l.226.835Z"/></svg>

);
