import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MarsDouble = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,6H19a1,1,0,0,0,0,2h1.586l-3.4,3.4a6.946,6.946,0,0,0-3.253-1.333A6.946,6.946,0,0,0,12.6,6.816l3.4-3.4V5a1,1,0,0,0,2,0V2a2,2,0,0,0-2-2H13a1,1,0,0,0,0,2h1.586l-3.4,3.4A6.993,6.993,0,1,0,6.069,17.931,7,7,0,1,0,18.6,12.816l3.4-3.4V11a1,1,0,0,0,2,0V8A2,2,0,0,0,22,6ZM2,11a5,5,0,1,1,5,5A5.006,5.006,0,0,1,2,11ZM13,22a5,5,0,0,1-4.908-4.094,7.005,7.005,0,0,0,5.814-5.814A4.995,4.995,0,0,1,13,22Z"/></svg>

);
