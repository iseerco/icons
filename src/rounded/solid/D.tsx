import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const D = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11,24H7c-2.757,0-5-2.243-5-5V5C2,2.243,4.243,0,7,0h4c6.065,0,11,4.935,11,11v2c0,6.065-4.935,11-11,11ZM7,2c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h4c4.963,0,9-4.038,9-9v-2c0-4.962-4.037-9-9-9H7Z"/></svg>

);
