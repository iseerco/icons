import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCursorText = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,3h2.5V0H16a5.483,5.483,0,0,0-4,1.737A5.483,5.483,0,0,0,8,0H5.5V3H8a2.5,2.5,0,0,1,2.5,2.5V13h-4v3h4v2.5A2.5,2.5,0,0,1,8,21H5.5v3H8a5.483,5.483,0,0,0,4-1.737A5.483,5.483,0,0,0,16,24h2.5V21H16a2.5,2.5,0,0,1-2.5-2.5V16h4V13h-4V5.5A2.5,2.5,0,0,1,16,3Z"/></svg>

);
