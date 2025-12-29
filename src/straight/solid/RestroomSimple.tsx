import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RestroomSimple = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16.5,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm5.5,18.5v3h-2v-3h-2v3h-2v-3h-1.985l1.604-12.255c.205-1.565,1.602-2.745,3.247-2.745h.268c1.646,0,3.042,1.18,3.247,2.744l1.604,12.256h-1.985ZM4,5c1.381,0,2.5-1.119,2.5-2.5S5.381,0,4,0,1.5,1.119,1.5,2.5s1.119,2.5,2.5,2.5Zm4,4v9h-1v6h-2v-6h-2v6H1v-6H0v-9c0-1.654,1.346-3,3-3h2c1.654,0,3,1.346,3,3Zm2,15h2V0h-2v24Z"/></svg>

);
