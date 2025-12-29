import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowSquareLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0H3A3,3,0,0,0,0,3V24H24V3A3,3,0,0,0,21,0Zm1,22H2V3A1,1,0,0,1,3,2H21a1,1,0,0,1,1,1Zm-9.758-5.758-1.414,1.414L6.585,13.414a2,2,0,0,1,0-2.829l4.243-4.242,1.414,1.414L9,11h9v2H9Z"/></svg>

);
