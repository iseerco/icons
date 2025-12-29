import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ThermometerHalf = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,12.111V5C16.789-1.609,7.209-1.6,7,5v7.111a7,7,0,1,0,10,0ZM12,20a3,3,0,0,1-1-5.816V8h2v6.184A3,3,0,0,1,12,20Z"/></svg>

);
