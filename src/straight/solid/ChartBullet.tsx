import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChartBullet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,2h-4V0h-2V2H3C1.35,2,0,3.35,0,5v2c0,1.65,1.35,3,3,3H15v2h2v-2h4c1.65,0,3-1.35,3-3v-2c0-1.65-1.35-3-3-3Zm-10,6V4h4v4h-4Zm10,6H13v-2h-2v2H3c-1.65,0-3,1.35-3,3v2c0,1.65,1.35,3,3,3H11v2h2v-2h8c1.65,0,3-1.35,3-3v-2c0-1.65-1.35-3-3-3Zm-14,6v-4h4v4H7Z"/></svg>

);
