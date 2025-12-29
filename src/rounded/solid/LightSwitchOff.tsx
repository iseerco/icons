import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LightSwitchOff = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.001,11h-6.001v-3h6v3Zm-6,2v5h6.001v-5h-6.001ZM22,5v14c0,2.757-2.243,5-5,5H7c-2.757,0-5-2.243-5-5V5C2,2.243,4.243,0,7,0h10c2.757,0,5,2.243,5,5Zm-5,2c0-.017,0-.035-.001-.052-.028-1.63-1.362-2.948-2.999-2.948h-4c-1.637,0-2.971,1.318-2.999,2.948,0,.017-.001,.034-.001,.052v11c0,1.103,.897,2,2,2h6c1.103,0,2-.897,2-2V7Z"/></svg>

);
