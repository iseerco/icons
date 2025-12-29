import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDevices = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M1,17H12v5H6v-1h5v-3H0V4.5c0-1.38,1.12-2.5,2.5-2.5H19.5c1.38,0,2.5,1.12,2.5,2.5v2.5h-1v-2.5c0-.83-.67-1.5-1.5-1.5H2.5c-.83,0-1.5,.67-1.5,1.5v12.5Zm23-5.5v12.5H14V11.5c0-1.38,1.12-2.5,2.5-2.5h5c1.38,0,2.5,1.12,2.5,2.5Zm-1,0c0-.83-.67-1.5-1.5-1.5h-5c-.83,0-1.5,.67-1.5,1.5v11.5h8V11.5Z"/></svg>

);
