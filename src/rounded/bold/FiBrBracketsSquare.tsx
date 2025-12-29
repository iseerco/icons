import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrBracketsSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M3,5.5v13c0,1.38,1.12,2.5,2.5,2.5h1c.83,0,1.5,.67,1.5,1.5s-.67,1.5-1.5,1.5h-1c-3.03,0-5.5-2.47-5.5-5.5V5.5C0,2.47,2.47,0,5.5,0h1c.83,0,1.5,.67,1.5,1.5s-.67,1.5-1.5,1.5h-1c-1.38,0-2.5,1.12-2.5,2.5ZM18.5,0h-1c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5h1c1.38,0,2.5,1.12,2.5,2.5v13c0,1.38-1.12,2.5-2.5,2.5h-1c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5h1c3.03,0,5.5-2.47,5.5-5.5V5.5c0-3.03-2.47-5.5-5.5-5.5Z"/></svg>

);
