import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Receipt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M21,23.9l-3.663-2.511-2.664,1.825-2.666-1.826L9.341,23.212,6.67,21.386,3,23.9V3A3,3,0,0,1,6,0H18a3,3,0,0,1,3,3ZM6.67,18.962l2.67,1.826,2.667-1.826,2.666,1.826,2.665-1.827L19,20.1V3a1,1,0,0,0-1-1H6A1,1,0,0,0,5,3V20.1Z"/><rect x="7" y="8" width="10" height="2"/><rect x="7" y="12" width="8" height="2"/></g></svg>

);
