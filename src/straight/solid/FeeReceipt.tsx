import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FeeReceipt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18,0H6c-1.654,0-3,1.346-3,3v20.927l3.63-2.204,2.704,1.881,2.667-1.854,2.666,1.855,2.704-1.88,3.63,2.209V3c0-1.654-1.346-3-3-3Zm-8.5,6.6h-1.9v1.801h1.9v1.6h-1.9v3h-1.6V5h3.5v1.6Zm4.5,0h-1.9v1.801h1.9v1.6h-1.9v1.4h1.9v1.6h-3.5V5h3.5v1.6Zm4.5,0h-1.9v1.801h1.9v1.6h-1.9v1.4h1.9v1.6h-3.5V5h3.5v1.6Z"/>
</svg>

);
