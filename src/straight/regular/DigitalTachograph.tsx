import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DigitalTachograph = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,2H3c-1.654,0-3,1.346-3,3v17h24V5c0-1.654-1.346-3-3-3Zm1,18H2V5c0-.552.449-1,1-1h18c.552,0,1,.448,1,1v15Zm-18-4h7v2h-7v-2Zm9,0h7v2h-7v-2Zm1-6H4v-4h10v4Zm-8,4h-2v-2h2v2Zm2,0v-2h2v2h-2Zm6,0h-2v-2h2v2Z"/>
</svg>

);
