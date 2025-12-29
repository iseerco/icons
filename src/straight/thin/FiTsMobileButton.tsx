import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMobileButton = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.5,24H6.5c-1.378,0-2.5-1.122-2.5-2.5V0H20V21.5c0,1.378-1.121,2.5-2.5,2.5ZM5,1V21.5c0,.827,.673,1.5,1.5,1.5h11c.827,0,1.5-.673,1.5-1.5V1H5ZM14,20h-4v1h4v-1Z"/></svg>

);
