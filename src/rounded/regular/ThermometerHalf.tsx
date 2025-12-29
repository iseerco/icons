import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ThermometerHalf = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,14.184V8a1,1,0,0,0-2,0v6.184a2.994,2.994,0,1,0,2,0Zm4-2.073V5C16.789-1.609,7.209-1.6,7,5v7.111a7,7,0,1,0,10,0ZM12,22a5.018,5.018,0,0,1-3.332-8.719A1,1,0,0,0,9,12.537V5a3,3,0,0,1,6,0v7.537a1,1,0,0,0,.332.744A5.018,5.018,0,0,1,12,22Z"/></svg>

);
