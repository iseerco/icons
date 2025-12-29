import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BoxBallot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,8h-2V3c0-1.654-1.346-3-3-3H8c-1.654,0-3,1.346-3,3v5H3c-1.654,0-3,1.346-3,3v13H24V11c0-1.654-1.346-3-3-3ZM7,3c0-.551,.449-1,1-1h8c.552,0,1,.449,1,1V12H7V3ZM3,10h2v4h14v-4h2c.552,0,1,.449,1,1v6H2v-6c0-.551,.449-1,1-1Zm-1,12v-3H22v3H2Z"/></svg>

);
