import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PaintRoller = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,6v3c0,1.654-1.346,3-3,3H12c-.551,0-1,.448-1,1v1.184c1.161,.414,2,1.514,2,2.816v7H7v-7c0-1.302,.839-2.402,2-2.816v-1.184c0-1.654,1.346-3,3-3h9c.551,0,1-.448,1-1v-3c0-.552-.449-1-1-1h-1v3H0V0H20V3h1c1.654,0,3,1.346,3,3Z"/></svg>

);
