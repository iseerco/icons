import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Crown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,8.293l-6-6-6,6-6-6V18.707a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V2.293Z"/></svg>

);
