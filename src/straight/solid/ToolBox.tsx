import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ToolBox = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M5,10v-2h2v2h10v-2h2v2h5v-3c0-1.654-1.346-3-3-3h-3V2c0-1.103-.897-2-2-2H8c-1.103,0-2,.897-2,2v2H3c-1.654,0-3,1.346-3,3v3H5ZM8,2h8v2H8V2ZM24,12v12H0V12H5v2h2v-2h10v2h2v-2h5Z"/></svg>

);
