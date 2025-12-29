import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Columns3 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19,2H5C2.243,2,0,4.243,0,7v10c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V7c0-2.757-2.243-5-5-5Zm-4,2v16h-6V4h6ZM2,17V7c0-1.654,1.346-3,3-3h2v16h-2c-1.654,0-3-1.346-3-3Zm20,0c0,1.654-1.346,3-3,3h-2V4h2c1.654,0,3,1.346,3,3v10Z"/></svg>

);
