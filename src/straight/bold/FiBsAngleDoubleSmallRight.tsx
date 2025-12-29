import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAngleDoubleSmallRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.457,10.232,14.164,4.939,12.043,7.061,16.982,12l-4.939,4.939,2.121,2.122,5.293-5.293A2.5,2.5,0,0,0,19.457,10.232Z"/><path d="M13.164,10.939l-6-6L5.043,7.061,9.982,12,5.043,16.939l2.121,2.122,6-6A1.5,1.5,0,0,0,13.164,10.939Z"/></svg>

);
