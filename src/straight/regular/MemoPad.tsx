import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MemoPad = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19,0H5c-1.654,0-3,1.346-3,3v21h20V3c0-1.654-1.346-3-3-3ZM5,2h14c.551,0,1,.448,1,1v2H4v-2c0-.552.449-1,1-1Zm-1,20V7h16v15H4Zm3-12h10v2H7v-2Zm0,4h6v2h-6v-2Z"/></svg>

);
