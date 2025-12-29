import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LightSwitch = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,0H5c-1.654,0-3,1.346-3,3V24H22V3c0-1.654-1.346-3-3-3Zm1,22H4V3c0-.552,.448-1,1-1h14c.552,0,1,.448,1,1V22Zm-13-2h10V4H7V20Zm2-2v-5h6v5h-6ZM15,6v5h-6V6h6Z"/></svg>

);
