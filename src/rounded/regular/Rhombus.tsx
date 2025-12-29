import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Rhombus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,23.928a4.99,4.99,0,0,1-3.536-1.462l-6.93-6.931a5,5,0,0,1,0-7.07l6.93-6.931a5.008,5.008,0,0,1,7.072,0l6.93,6.931a5,5,0,0,1,0,7.07l-6.93,6.931A4.99,4.99,0,0,1,12,23.928ZM12,2.071a2.992,2.992,0,0,0-2.122.877L2.948,9.879a3,3,0,0,0,0,4.242l6.93,6.931a3,3,0,0,0,4.244,0l6.93-6.931a3,3,0,0,0,0-4.242l-6.93-6.931A2.992,2.992,0,0,0,12,2.071Z"/></svg>

);
