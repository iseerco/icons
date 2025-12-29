import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GripLines = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m0,9c0-.552.448-1,1-1h22c.552,0,1,.448,1,1s-.448,1-1,1H1c-.552,0-1-.448-1-1Zm23,5H1c-.552,0-1,.448-1,1s.448,1,1,1h22c.552,0,1-.448,1-1s-.448-1-1-1Z"/></svg>

);
