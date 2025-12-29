import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCompressAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2.121,0,0,2.121l3.939,3.94L2,8H7A1,1,0,0,0,8,7V2L6.061,3.939Z"/><path d="M22,16H17a1,1,0,0,0-1,1v5l1.939-1.939L21.879,24,24,21.879l-3.939-3.94Z"/><path d="M17,8h5L20.061,6.061,24,2.121,21.879,0l-3.94,3.939L16,2V7A1,1,0,0,0,17,8Z"/><path d="M7,16H2l1.939,1.939L0,21.879,2.121,24l3.94-3.939L8,22V17A1,1,0,0,0,7,16Z"/></svg>

);
