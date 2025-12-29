import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrToolCrop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.5,17H20V8.5A4.5,4.5,0,0,0,15.5,4H7V1.5A1.5,1.5,0,0,0,5.5,0h0A1.5,1.5,0,0,0,4,1.5V4H1.5A1.5,1.5,0,0,0,0,5.5H0A1.5,1.5,0,0,0,1.5,7H4v8.5A4.5,4.5,0,0,0,8.5,20H17v2.5A1.5,1.5,0,0,0,18.5,24h0A1.5,1.5,0,0,0,20,22.5V20h2.5A1.5,1.5,0,0,0,24,18.5h0A1.5,1.5,0,0,0,22.5,17Zm-14,0A1.5,1.5,0,0,1,7,15.5V7h8.5A1.5,1.5,0,0,1,17,8.5V17Z"/></svg>

);
