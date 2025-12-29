import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TableRows = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,2H5C2.243,2,0,4.243,0,7v10c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V7c0-2.757-2.243-5-5-5Zm3,5v4H7V4h12c1.654,0,3,1.346,3,3ZM2,17V7c0-1.654,1.346-3,3-3V20c-1.654,0-3-1.346-3-3Zm17,3H7v-7h15v4c0,1.654-1.346,3-3,3Z"/></svg>

);
