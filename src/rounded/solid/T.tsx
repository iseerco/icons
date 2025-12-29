import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const T = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0H3c-.553,0-1,.447-1,1s.447,1,1,1H11V23c0,.553,.447,1,1,1s1-.447,1-1V2h8c.553,0,1-.447,1-1s-.447-1-1-1Z"/></svg>

);
