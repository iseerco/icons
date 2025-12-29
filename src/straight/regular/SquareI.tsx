import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareI = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m8,5h8v2h-3v10h3v2h-8v-2h3V7h-3v-2Zm16-2v21H0V3C0,1.346,1.346,0,3,0h18c1.654,0,3,1.346,3,3Zm-2,0c0-.551-.449-1-1-1H3c-.551,0-1,.449-1,1v19h20V3Z"/></svg>

);
