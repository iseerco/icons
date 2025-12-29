import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ToriiGate = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.173,2.968l.827-1.754-1.339-.928-.314.262c-1.124.937-2.55,1.453-4.013,1.453H5.666c-1.463,0-2.889-.516-4.013-1.453l-.316-.263-1.337.93.827,1.754c.655,1.528,1.776,2.718,3.173,3.398v2.634h-2v2h2v13h2v-13h12v13h2v-13h2v-2h-2v-2.634c1.397-.68,2.518-1.87,3.173-3.398ZM6,6.941c.259.031.519.059.787.059h4.213v2h-5v-2.059Zm12,2.059h-5v-2h4.213c.268,0,.528-.027.787-.059v2.059Z"/>
</svg>

);
