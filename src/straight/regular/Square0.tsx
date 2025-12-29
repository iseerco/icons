import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Square0 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,18c-2.206,0-4-1.794-4-4v-4c0-2.206,1.794-4,4-4s4,1.794,4,4v4c0,2.206-1.794,4-4,4Zm0-10c-1.103,0-2,.897-2,2v4c0,1.103,.897,2,2,2s2-.897,2-2v-4c0-1.103-.897-2-2-2Zm12,16H0V3C0,1.346,1.346,0,3,0H21c1.654,0,3,1.346,3,3V24ZM2,22H22V3c0-.551-.449-1-1-1H3c-.551,0-1,.449-1,1V22Z"/></svg>

);
