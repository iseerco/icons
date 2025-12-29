import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrBracketSquareRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.5,24h-1c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5h1c1.38,0,2.5-1.12,2.5-2.5V5.5c0-1.38-1.12-2.5-2.5-2.5h-1c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5h1c3.03,0,5.5,2.47,5.5,5.5v13c0,3.03-2.47,5.5-5.5,5.5Z"/></svg>

);
