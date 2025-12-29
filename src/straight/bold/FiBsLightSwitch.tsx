import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLightSwitch = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,0H5.5c-1.93,0-3.5,1.57-3.5,3.5V24H22V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,21H5V3.5c0-.275,.225-.5,.5-.5h13c.275,0,.5,.225,.5,.5V21Zm-12-2h10V5H7v14Zm3-3v-2.5h4v2.5h-4Zm4-8v2.5h-4v-2.5h4Z"/></svg>

);
