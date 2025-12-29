import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Newspaper = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,22V6h4v16c0,1.105-.895,2-2,2h0c-1.105,0-2-.895-2-2ZM24,3v17.5c0,1.93-1.57,3.5-3.5,3.5H5.444c.345-.591.556-1.268.556-2V3c0-1.654,1.346-3,3-3h12c1.654,0,3,1.346,3,3Zm-15,5h4v-4h-4v4Zm12,10h-12v2h12v-2Zm0-4h-12v2h12v-2Zm0-4h-12v2h12v-2Zm0-4h-6v2h6v-2Z"/>
</svg>

);
