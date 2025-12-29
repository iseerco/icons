import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TableRows = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,2H3C1.346,2,0,3.346,0,5V22H24V5c0-1.654-1.346-3-3-3Zm1,3v6H7V4h14c.552,0,1,.448,1,1ZM2,5c0-.552,.448-1,1-1h2V20H2V5Zm5,15v-7h15v7H7Z"/></svg>

);
