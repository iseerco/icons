import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Circle1 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,18h-2V9.371l-1.583,1.626-1.433-1.395,3.507-3.603h1.509v12Zm11-6C24,5.383,18.617,0,12,0S0,5.383,0,12s5.383,12,12,12,12-5.383,12-12Zm-2,0c0,5.514-4.486,10-10,10S2,17.514,2,12,6.486,2,12,2s10,4.486,10,10Z"/></svg>

);
