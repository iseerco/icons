import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Hexagon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,12c0-.81,.2-1.62,.59-2.36L3.81,3.64c.87-1.63,2.56-2.64,4.41-2.64h7.58c1.85,0,3.54,1.01,4.41,2.64l3.2,6c.79,1.48,.79,3.24,0,4.71l-3.2,6c-.87,1.63-2.56,2.64-4.41,2.64h-7.58c-1.85,0-3.53-1.01-4.41-2.64L.59,14.37C.2,13.63,0,12.82,0,12Z"/></svg>

);
