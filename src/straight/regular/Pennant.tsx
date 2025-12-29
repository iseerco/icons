import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Pennant = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M3.337,3.478A2,2,0,1,0,1,3.723V24H3V20.664L23.577,12ZM3,5.506,18.423,12,3,18.494Z"/></svg>

);
