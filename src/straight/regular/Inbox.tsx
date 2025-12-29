import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Inbox = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M21,24H3a3,3,0,0,1-3-3V12H8v2a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V12h8v9A3,3,0,0,1,21,24ZM2,14v7a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V14H18a4,4,0,0,1-4,4H10a4,4,0,0,1-4-4Z"/><rect x="2" y="8" width="20" height="2"/><rect x="2" y="4" width="20" height="2"/></g></svg>

);
