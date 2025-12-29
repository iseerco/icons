import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCursorText = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.5,21H16a2.5,2.5,0,0,1-2.5-2.5V16h3a1.5,1.5,0,0,0,0-3h-3V5.5A2.5,2.5,0,0,1,16,3h1.5a1.5,1.5,0,0,0,0-3H16a5.483,5.483,0,0,0-4,1.737A5.483,5.483,0,0,0,8,0H6.5a1.5,1.5,0,0,0,0,3H8a2.5,2.5,0,0,1,2.5,2.5V13h-3a1.5,1.5,0,0,0,0,3h3v2.5A2.5,2.5,0,0,1,8,21H6.5a1.5,1.5,0,0,0,0,3H8a5.483,5.483,0,0,0,4-1.737A5.483,5.483,0,0,0,16,24h1.5a1.5,1.5,0,0,0,0-3Z"/></svg>

);
