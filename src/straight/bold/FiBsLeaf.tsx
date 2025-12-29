import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLeaf = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.375.065C21.037.12,9.179.721,4.92,4.979A10.018,10.018,0,0,0,3.939,17.94L.007,21.879,2.128,24,6.06,20.061a10.019,10.019,0,0,0,12.961-.981c4.342-4.342,4.868-16.134,4.914-17.464L23.991,0ZM16.9,16.958a7,7,0,0,1-8.683.947l8.72-8.719L14.814,7.064,6.1,15.784A7,7,0,0,1,7.042,7.1c2.512-2.513,9.738-3.595,13.8-3.932C20.523,7.206,19.465,14.393,16.9,16.958Z"/></svg>

);
