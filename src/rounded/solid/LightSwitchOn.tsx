import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LightSwitchOn = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9,11V6h6v5h-6Zm13-6v14c0,2.757-2.243,5-5,5H7c-2.757,0-5-2.243-5-5V5C2,2.243,4.243,0,7,0h10c2.757,0,5,2.243,5,5Zm-5,1c0-1.103-.897-2-2-2h-6c-1.103,0-2,.897-2,2v11c0,.017,0,.035,.001,.052,.028,1.63,1.362,2.948,2.999,2.948h4c1.637,0,2.971-1.318,2.999-2.948,0-.017,.001-.034,.001-.052V6Zm-8,7v3h6v-3h-6Z"/></svg>

);
