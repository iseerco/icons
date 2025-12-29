import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const EarthAsia = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7,16l3,.5v1.5h-3v-2Zm4-1.061l1.061,1.061,2.121-2.121-1.414-1.414-1.768,2.475Zm6-8.439l-1.385-.577-1.615,2.577,1.846.769,1.154-2.769Zm7,5.5c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-12,10c2.59,0,4.952-.989,6.73-2.61l-2.73-.39-1-2,1-2,2.5-.5,1.5-1.5,1.784,1.07c.141-.668.216-1.361.216-2.07,0-4.39-2.844-8.129-6.786-9.47-.643,1.328-1.214,2.47-1.214,2.47l-2,.5-.5,1.5,1.5,2-1.5,2h-2l.5,3-2,1-2-2.5-2,1.5h-1.799c.929,4.559,4.97,8,9.799,8Z"/></svg>

);
