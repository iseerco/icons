import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowFromTop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.278,17.129,13,21.407V2h5a1,1,0,0,0,0-2H6A1,1,0,0,0,6,2h5V21.421L6.707,17.129a1,1,0,1,0-1.414,1.414l4.579,4.578a3,3,0,0,0,4.242,0l4.578-4.578a1,1,0,1,0-1.414-1.414Z"/></svg>

);
