import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLightSwitchOff = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,0H5.5c-1.93,0-3.5,1.57-3.5,3.5V24H22V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,21H5V3.5c0-.276,.224-.5,.5-.5h13c.276,0,.5,.224,.5,.5V21ZM14.5,5h-5c-1.378,0-2.5,1.122-2.5,2.5v11.5h10V7.5c0-1.378-1.122-2.5-2.5-2.5Zm-4.5,11v-4h4v4h-4Z"/></svg>

);
