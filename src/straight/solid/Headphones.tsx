import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Headphones = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,12.418V11A9,9,0,0,0,3,11v1.418A5,5,0,0,0,5,22H7V12H5V11a7,7,0,0,1,14,0v1H17V22h2a5,5,0,0,0,2-9.582Z"/></svg>

);
