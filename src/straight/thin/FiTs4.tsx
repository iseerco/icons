import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTs4 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,0V14H6.5c-.827,0-1.5-.673-1.5-1.5V0h-1V12.5c0,1.378,1.121,2.5,2.5,2.5h12.5v9h1V0h-1Z"/></svg>

);
