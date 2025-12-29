import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Pager = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,2H3c-1.654,0-3,1.346-3,3v17h24V5c0-1.654-1.346-3-3-3Zm1,18H2V5c0-.551.448-1,1-1h18c.552,0,1,.449,1,1v15ZM4,12h16v-6H4v6Zm2-4h12v2H6v-2Zm-2,6h3v2h-3v-2Zm5,0h3v2h-3v-2Zm5,0h3v2h-3v-2Z"/></svg>

);
