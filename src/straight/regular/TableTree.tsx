import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TableTree = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,2H3C1.346,2,0,3.346,0,5V22H24V5c0-1.654-1.346-3-3-3ZM3,4H21c.552,0,1,.448,1,1v2H2v-2c0-.552,.448-1,1-1Zm-1,16V9h3v9h7v-2H7v-2h3v-2h-3v-3h15v11H2Zm12-4h4v2h-4v-2Zm2-2h-4v-2h4v2Z"/></svg>

);
