import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCurve = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m1.5,24c-.829,0-1.5-.672-1.5-1.5C0,10.094,10.093,0,22.5,0c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5C11.748,3,3,11.748,3,22.5c0,.828-.671,1.5-1.5,1.5Z"/>
</svg>

);
