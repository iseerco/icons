import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Clipboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13,4h-2c-1.103,0-2-.897-2-2s.897-2,2-2h2c1.103,0,2,.897,2,2s-.897,2-2,2Zm3.999-1.9c-.053,2.16-1.827,3.9-3.999,3.9h-2c-2.172,0-3.946-1.74-3.999-3.9-2.283.463-4.001,2.481-4.001,4.9v12c0,2.761,2.239,5,5,5h8c2.761,0,5-2.239,5-5V7c0-2.419-1.718-4.437-4.001-4.9Z"/></svg>

);
