import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Pennant = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.93,9.147,3.429,3.4a2,2,0,1,0-2.37.357A.95.95,0,0,0,1,4V23a1,1,0,0,0,2,0V20.736l18.949-5.89a3,3,0,0,0-.019-5.7Z"/></svg>

);
