import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Images = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.05,18l-1.54,5.67L.17,18.69,3,8.28v9.72H20.05Zm3.95-15v13H5V3c0-1.65,1.35-3,3-3h13c1.65,0,3,1.35,3,3Zm-16,1.5c0,.83,.67,1.5,1.5,1.5s1.5-.67,1.5-1.5-.67-1.5-1.5-1.5-1.5,.67-1.5,1.5Zm14-1.73l-6.11,6.11-3.3-3.3-5.59,5.59v2.83l5.59-5.59,3.3,3.3,6.11-6.11V2.77Z"/></svg>

);
