import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Speaker = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,24H3V3A3,3,0,0,1,6,0H18a3,3,0,0,1,3,3ZM12,3.5A1.5,1.5,0,1,0,13.5,5,1.5,1.5,0,0,0,12,3.5ZM18,16a6,6,0,1,0-6,6A6.006,6.006,0,0,0,18,16Zm-2,0a4,4,0,1,1-4-4A4,4,0,0,1,16,16Zm-3-1H11v2h2Z"/></svg>

);
