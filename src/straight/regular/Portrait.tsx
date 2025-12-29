import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Portrait = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M21,0H3A3,3,0,0,0,0,3V24H24V3A3,3,0,0,0,21,0ZM7,22V17a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1v5Zm15,0H19V17a3,3,0,0,0-3-3H8a3,3,0,0,0-3,3v5H2V3A1,1,0,0,1,3,2H21a1,1,0,0,1,1,1Z"/><path d="M12,4a4,4,0,1,0,4,4A4,4,0,0,0,12,4Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,10Z"/></g></svg>

);
