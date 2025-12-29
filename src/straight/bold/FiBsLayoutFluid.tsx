import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLayoutFluid = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,11H0V3A3,3,0,0,1,3,0H15Z"/><path d="M24,11H17V0h4a3,3,0,0,1,3,3Z"/><path d="M7,24H3a3,3,0,0,1-3-3V13H7Z"/><path d="M21,24H9V13H24v8A3,3,0,0,1,21,24Z"/></svg>

);
