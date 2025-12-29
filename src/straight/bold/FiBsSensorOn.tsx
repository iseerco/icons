import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSensorOn = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11.5,9H3.5c-1.93,0-3.5,1.57-3.5,3.5v11.5H15V12.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,12H3V12.5c0-.276,.225-.5,.5-.5H11.5c.275,0,.5,.224,.5,.5v8.5Zm12-11h-3c0-3.86-3.141-7-7-7V0c5.514,0,10,4.486,10,10Zm-5,0h-3c0-1.103-.897-2-2-2v-3c2.757,0,5,2.243,5,5Zm-11,5.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5,1.5,.672,1.5,1.5Z"/></svg>

);
