import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PointOfSale = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m7,4h10v4H7v-4Zm0,8h2v-2h-2v2Zm8,0h2v-2h-2v2Zm-8,4h2v-2h-2v2Zm8,0h2v-2h-2v2Zm-4-4h2v-2h-2v2Zm0,4h2v-2h-2v2Zm-4,4h2v-2h-2v2Zm8,0h2v-2h-2v2Zm-4,0h2v-2h-2v2Zm11,0h-1v4H3V3c0-1.654,1.346-3,3-3h12c1.654,0,3,1.346,3,3v1h1v16Zm-3-17c0-.552-.448-1-1-1H6c-.551,0-1,.448-1,1v19h14V3Z"/>
</svg>

);
