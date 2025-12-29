import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const VolumeOff = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,24.013l-7.356-6.013h-2.644c-1.103,0-2-.897-2-2v-8c0-1.103.897-2,2-2h2.646L12,.037v23.976ZM2,8v8h3.356l4.644,3.795V4.233l-4.646,3.767h-3.354Z"/></svg>

);
