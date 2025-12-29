import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BookBookmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,0H5c-1.654,0-3,1.346-3,3V21c0,1.654,1.346,3,3,3H22V2c0-1.103-.897-2-2-2Zm0,18H8V2h4V11l2.5-2.5,2.5,2.5V2h3V18ZM5,2h1V18h-1c-.351,0-.687,.061-1,.172V3c0-.551,.449-1,1-1Zm0,20c-.551,0-1-.449-1-1s.449-1,1-1h15v2H5Z"/></svg>

);
