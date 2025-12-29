import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAngleSmallUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.939,15.561,12,10.621l-4.939,4.94L4.939,13.439l5.293-5.293a2.5,2.5,0,0,1,3.536,0l5.293,5.293Z"/></svg>

);
