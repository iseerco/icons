import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BedAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,13V5c0-1.654,1.346-3,3-3H21c1.654,0,3,1.346,3,3V13h-3v-2c0-1.654-1.346-3-3-3h-4c-.771,0-1.468,.301-2,.78-.532-.48-1.229-.78-2-.78H6c-1.654,0-3,1.346-3,3v2H0Zm14-3c-.552,0-1,.449-1,1v2h6v-2c0-.551-.448-1-1-1h-4ZM0,15v7H2v-3H22v3h2v-7H0Zm6-5c-.551,0-1,.449-1,1v2h6v-2c0-.551-.449-1-1-1H6Z"/></svg>

);
