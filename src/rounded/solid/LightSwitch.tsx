import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LightSwitch = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9,11V6h5.999v5h-5.999Zm0,2v5h6v-5h-6ZM22,5v14c0,2.757-2.243,5-5,5H7c-2.757,0-5-2.243-5-5V5C2,2.243,4.243,0,7,0h10c2.757,0,5,2.243,5,5Zm-5,1c0-1.103-.897-2-2-2h-6c-1.103,0-2,.897-2,2v12c0,1.103,.897,2,2,2h6c1.103,0,2-.897,2-2V6Z"/></svg>

);
