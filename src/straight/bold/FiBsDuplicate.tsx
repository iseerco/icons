import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDuplicate = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.9,0H11A3,3,0,0,0,8,3V5H5A3,3,0,0,0,2,8V24H17V18h5V3.307ZM14,21H5V8H8V18h6Zm-3-6V3h5V6h3v9Z"/></svg>

);
