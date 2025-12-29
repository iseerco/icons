import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HouseTurret = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,0V2h-2V0h-2V2h-2V0h-2V2h-2V0h-2V4.5c0,1.379,1.122,2.5,2.5,2.5h9c1.378,0,2.5-1.121,2.5-2.5V0h-2Zm-7.151,12.747l-5.448-4.264c-.824-.646-1.977-.646-2.801,0L1.151,12.746c-.731,.573-1.151,1.435-1.151,2.363v8.891H16V15.109c0-.929-.42-1.79-1.151-2.362Zm-4.849,6.253H6v-4h4v4Zm12-10v15h-4V15.109c0-1.548-.699-2.983-1.919-3.938l-2.776-2.172h8.695Z"/></svg>

);
