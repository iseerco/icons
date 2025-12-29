import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowSquareUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0H3A3,3,0,0,0,0,3V24H24V3A3,3,0,0,0,21,0Zm1,22H2V3A1,1,0,0,1,3,2H21a1,1,0,0,1,1,1ZM7.757,12.242,6.343,10.828l4.243-4.243a2,2,0,0,1,2.828,0l4.243,4.243-1.414,1.414L13,9v9H11V9Z"/></svg>

);
