import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AngleSquareLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g><path d="M24,3a3,3,0,0,0-3-3H3A3,3,0,0,0,0,3V24H24ZM2,3A1,1,0,0,1,3,2H21a1,1,0,0,1,1,1V22H2Z"/><path d="M8.005,11.98a2,2,0,0,1,.585-1.414l4.673-4.672,1.414,1.414L10,11.98l4.712,4.712L13.3,18.106,8.59,13.4A2,2,0,0,1,8.005,11.98Z"/></g></svg>

);
