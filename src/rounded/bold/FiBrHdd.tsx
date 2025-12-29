import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrHdd = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.5,0H6.5C3.47,0,1,2.47,1,5.5v14.5c0,2.21,1.79,4,4,4h14c2.21,0,4-1.79,4-4V5.5c0-3.03-2.47-5.5-5.5-5.5ZM4,17V5.5c0-1.38,1.12-2.5,2.5-2.5h11c1.38,0,2.5,1.12,2.5,2.5v11.5H4Zm10.5,5c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5,.67,1.5,1.5-.67,1.5-1.5,1.5Zm4,0c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5,.67,1.5,1.5-.67,1.5-1.5,1.5Z"/></svg>

);
