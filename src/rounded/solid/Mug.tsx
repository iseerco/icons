import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Mug = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,6H19V3a1,1,0,0,0,0-2H1A1,1,0,0,0,1,3V6H14a1,1,0,0,1,0,2H1V18a5.006,5.006,0,0,0,5,5h8a5.17,5.17,0,0,0,5-6h1.5A3.5,3.5,0,0,0,24,13.5v-4A3.5,3.5,0,0,0,20.5,6ZM22,13.5A1.5,1.5,0,0,1,20.5,15H19V8h1.5A1.5,1.5,0,0,1,22,9.5Z"/></svg>

);
