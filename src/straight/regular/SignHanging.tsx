import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SignHanging = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,2V0H3C1.346,0,0,1.346,0,3V24H2V3c0-.551,.449-1,1-1H7v2c-1.654,0-3,1.346-3,3v13H24V7c0-1.654-1.346-3-3-3V2h3Zm-2,5v11H6V7c0-.551,.449-1,1-1h14c.551,0,1,.449,1,1Zm-3-3H9V2h10v2Z"/></svg>

);
