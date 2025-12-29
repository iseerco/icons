import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const H = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0c-.553,0-1,.448-1,1V11H4V1c0-.552-.448-1-1-1s-1,.448-1,1V23c0,.552,.448,1,1,1s1-.448,1-1V13H20v10c0,.552,.447,1,1,1s1-.448,1-1V1c0-.552-.447-1-1-1Z"/></svg>

);
