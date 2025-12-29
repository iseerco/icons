import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ToolBox = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,4h-3V2c0-1.103-.897-2-2-2H8c-1.103,0-2,.897-2,2v2H3c-1.654,0-3,1.346-3,3V24H24V7c0-1.654-1.346-3-3-3ZM8,2h8v2H8V2ZM3,6H21c.552,0,1,.449,1,1v3h-3v-2h-2v2H7v-2h-2v2H2v-3c0-.551,.448-1,1-1Zm-1,16V12h3v2h2v-2h10v2h2v-2h3v10H2Z"/></svg>

);
