import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Columns3 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9,2h6v20h-6V2Zm10,0h-2v20h2c2.757,0,5-2.243,5-5V7c0-2.757-2.243-5-5-5Zm-12,0h-2C2.243,2,0,4.243,0,7v10c0,2.757,2.243,5,5,5h2V2Z"/></svg>

);
