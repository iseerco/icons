import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Hurricane = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,13c0,6.374-5.047,11-12,11H7V22a5.428,5.428,0,0,0,3.437-1.122C-2.719,18.034.32-.281,14,0h3V2a5.428,5.428,0,0,0-3.437,1.122A10.016,10.016,0,0,1,22,13Zm-7-1a3,3,0,0,0-6,0A3,3,0,0,0,15,12Z"/></svg>

);
