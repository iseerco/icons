import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RulerVertical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,19c-.553,0-1-.447-1-1s.447-1,1-1h2.949v-2h-2.949c-.553,0-1-.447-1-1s.447-1,1-1h2.949v-2h-2.949c-.553,0-1-.447-1-1s.447-1,1-1h2.949v-2h-2.949c-.553,0-1-.447-1-1s.447-1,1-1h2.949v-1.5c0-1.933-1.567-3.5-3.5-3.5h-3c-1.933,0-3.5,1.567-3.5,3.5V20.5c0,1.933,1.567,3.5,3.5,3.5h3c1.933,0,3.5-1.567,3.5-3.5v-1.5h-2.949Z"/></svg>

);
