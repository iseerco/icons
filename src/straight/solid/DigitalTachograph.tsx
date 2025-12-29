import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DigitalTachograph = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,2H3c-1.654,0-3,1.346-3,3v17h24V5c0-1.654-1.346-3-3-3ZM3,6h10v4H3v-4Zm6,6v2h-2v-2h2Zm-6,0h2v2h-2v-2Zm8,6H3v-2h8v2Zm0-6h2v2h-2v-2Zm10,6h-8v-2h8v2Z"/>
</svg>

);
