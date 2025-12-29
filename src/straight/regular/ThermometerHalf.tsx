import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ThermometerHalf = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,14.172V8H11v6.172a3,3,0,1,0,2,0Zm4-2.061V5C16.789-1.609,7.209-1.6,7,5v7.111a7,7,0,1,0,10,0ZM12,22a5.018,5.018,0,0,1-3.332-8.719l.332-.3V5a3,3,0,0,1,6,0v7.983l.332.3A5.018,5.018,0,0,1,12,22Z"/></svg>

);
