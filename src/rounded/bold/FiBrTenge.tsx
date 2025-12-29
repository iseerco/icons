import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTenge = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2,1.5c0-.829,.671-1.5,1.5-1.5H20.5c.829,0,1.5,.671,1.5,1.5s-.671,1.5-1.5,1.5H3.5c-.829,0-1.5-.671-1.5-1.5Zm18.5,3.5H3.5c-.829,0-1.5,.671-1.5,1.5s.671,1.5,1.5,1.5h7v14.5c0,.829,.671,1.5,1.5,1.5s1.5-.671,1.5-1.5V8h7c.829,0,1.5-.671,1.5-1.5s-.671-1.5-1.5-1.5Z"/></svg>

);
