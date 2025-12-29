import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BedAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,2H3C1.346,2,0,3.346,0,5V22H2v-3H22v3h2V5c0-1.654-1.346-3-3-3ZM3,4H21c.552,0,1,.449,1,1V13h-2v-1c0-1.654-1.346-3-3-3h-3c-.768,0-1.469,.29-2,.766-.531-.476-1.232-.766-2-.766h-3c-1.654,0-3,1.346-3,3v1H2V5c0-.551,.449-1,1-1ZM11,13H6v-1c0-.551,.449-1,1-1h3c.551,0,1,.449,1,1v1Zm2-1c0-.551,.448-1,1-1h3c.552,0,1,.449,1,1v1h-5v-1ZM2,17v-2H22v2H2Z"/></svg>

);
