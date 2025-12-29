import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MoveToFolder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,9v14H24V9H0Zm17.42,8.41l-3.3,3.3-1.41-1.41,2.29-2.29H7v-2H15.01l-2.3-2.29,1.41-1.41,3.3,3.3c.77,.78,.77,2.04,0,2.81ZM0,7v-3C0,2.35,1.35,1,3,1h5.24l4,2h8.76c1.65,0,3,1.35,3,3v1H0Z"/></svg>

);
