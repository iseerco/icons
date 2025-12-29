import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ShekelSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M3,24c-.553,0-1-.447-1-1V3C2,1.346,3.346,0,5,0h3c4.411,0,8,3.589,8,8v9c-.005,1.308-1.995,1.307-2,0V8c0-3.309-2.691-6-6-6h-3c-.552,0-1,.448-1,1V23c0,.553-.447,1-1,1Zm19-8V1c-.005-1.308-1.995-1.307-2,0v15c0,3.309-2.691,6-6,6h-3c-.552,0-1-.448-1-1V7c-.005-1.308-1.995-1.307-2,0v14c0,1.654,1.346,3,3,3h3c4.411,0,8-3.589,8-8Z"/></svg>

);
