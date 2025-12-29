import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BreadSlice = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,1H5A5,5,0,0,0,2,9.979V23H22V9.979A5,5,0,0,0,19,1ZM8,18a1,1,0,0,1,0-2A1,1,0,0,1,8,18Zm0-4a1,1,0,0,1,0-2A1,1,0,0,1,8,14Zm4,4a1,1,0,0,1,0-2A1,1,0,0,1,12,18Z"/></svg>

);
