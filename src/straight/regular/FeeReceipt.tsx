import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FeeReceipt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,15h2v8.934l-3.63-2.209-2.704,1.88-2.666-1.855-2.667,1.854-2.704-1.881-3.63,2.204V3c0-1.654,1.346-3,3-3h12c1.654,0,3,1.346,3,3h-2c0-.551-.449-1-1-1H6c-.551,0-1,.449-1,1v17.372l1.704-1.034,2.629,1.83,2.667-1.854,2.667,1.855,2.631-1.829,1.702,1.035v-5.375Zm-7-8.4v-1.6h-3.5v8h1.6v-3h1.9v-1.6h-1.9v-1.801h1.9Zm4.5,0v-1.6h-3.5v8h3.5v-1.6h-1.9v-1.4h1.9v-1.6h-1.9v-1.801h1.9Zm1,6.4h3.5v-1.6h-1.9v-1.4h1.9v-1.6h-1.9v-1.801h1.9v-1.6h-3.5v8Z"/>
</svg>

);
