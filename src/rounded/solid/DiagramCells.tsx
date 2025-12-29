import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiagramCells = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,10H4C1.79,10,0,8.21,0,6v-2C0,1.79,1.79,0,4,0H20c2.21,0,4,1.79,4,4v2c0,2.21-1.79,4-4,4Zm0,14H4c-2.21,0-4-1.79-4-4v-2c0-2.21,1.79-4,4-4H20c2.21,0,4,1.79,4,4v2c0,2.21-1.79,4-4,4Z"/></svg>

);
