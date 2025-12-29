import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ComputerClassic = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,24H3v-3h18v3Zm2-21v13c0,1.654-1.346,3-3,3H4c-1.654,0-3-1.346-3-3V3C1,1.346,2.346,0,4,0h16c1.654,0,3,1.346,3,3Zm-15,12c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5.672,1.5,1.5,1.5,1.5-.672,1.5-1.5Zm11-1h-9v2h9v-2Zm0-11H5v9h14V3Zm-2,2H7v5h10v-5Z"/>
</svg>

);
