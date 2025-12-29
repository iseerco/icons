import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTally1 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m1.5,24c-.829,0-1.5-.671-1.5-1.5V1.5C0,.671.671,0,1.5,0s1.5.671,1.5,1.5v21c0,.829-.671,1.5-1.5,1.5Z"/></svg>

);
