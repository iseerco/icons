import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MoveToFolder2 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.42,17.59c.77,.78,.77,2.04,0,2.81l-3.3,3.3-1.41-1.41,2.29-2.29h-8v-2h8.01l-2.3-2.29,1.41-1.41,3.3,3.3Zm-2.42-15.59H12.24L8.24,0H3C1.35,0,0,1.35,0,3v3H24v-1c0-1.65-1.35-3-3-3ZM0,22H11v-6h4.59l4.53-4.53,3.88,3.88v-7.35H0v14Z"/></svg>

);
