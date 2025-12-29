import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsOrganizationChart = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m7,23v1H0v-1c0-1.105.895-2,2-2h3c1.105,0,2,.895,2,2Zm-3.5-3c1.105,0,2-.895,2-2s-.895-2-2-2-2,.895-2,2,.895,2,2,2Zm10,1h-3c-1.105,0-2,.895-2,2v1h7v-1c0-1.105-.895-2-2-2Zm-1.5-5c-1.105,0-2,.895-2,2s.895,2,2,2,2-.895,2-2-.895-2-2-2Zm3.5-9c0-1.105-.895-2-2-2h-3c-1.105,0-2,.895-2,2v1h7v-1Zm-3.5-3c1.105,0,2-.895,2-2s-.895-2-2-2-2,.895-2,2,.895,2,2,2Zm10,17h-3c-1.105,0-2,.895-2,2v1h7v-1c0-1.105-.895-2-2-2Zm-1.5-5c-1.105,0-2,.895-2,2s.895,2,2,2,2-.895,2-2-.895-2-2-2Zm-15.5-4h5.5v2h3v-2h5.5v2h3v-2c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3v2h3v-2Z"/>
</svg>

);
